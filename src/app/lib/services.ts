import { prisma } from './prisma'
import { Profile, ContactMessage, ContactFormData, PageView, ClickEvent } from '../types'

export class ProfileService {
  static async getProfile(): Promise<Profile | null> {
    try {
      const profile = await prisma.profile.findFirst({
        where: { isActive: true },
        include: {
          socialLinks: {
            where: { isVisible: true },
            orderBy: { order: 'asc' }
          },
          expertise: {
            where: { isVisible: true },
            orderBy: { order: 'asc' }
          },
          projects: {
            where: { 
              isVisible: true,
              isFeatured: true 
            },
            include: {
              tags: {
                include: {
                  tag: true
                }
              }
            },
            orderBy: { order: 'asc' }
          }
        }
      })

      return profile as Profile | null
    } catch (error) {
      console.error('Error fetching profile:', error)
      return null
    }
  }
}

export class ContactService {
  static async createMessage(data: ContactFormData): Promise<ContactMessage | null> {
    try {
      const message = await prisma.contactMessage.create({
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject || 'Contato via site',
          message: data.message,
          status: 'UNREAD'
        }
      })

      return message as ContactMessage
    } catch (error) {
      console.error('Error creating contact message:', error)
      return null
    }
  }

  static async getMessages(limit = 50) {
    try {
      return await prisma.contactMessage.findMany({
        orderBy: { createdAt: 'desc' },
        take: limit
      })
    } catch (error) {
      console.error('Error fetching messages:', error)
      return []
    }
  }
}

export class AnalyticsService {
  static async trackPageView(data: Omit<PageView, 'id' | 'createdAt'>) {
    try {
      await prisma.pageView.create({
        data: {
          page: data.page,
          userAgent: data.userAgent,
          ipAddress: data.ipAddress,
          referrer: data.referrer,
          country: data.country
        }
      })
    } catch (error) {
      console.error('Error tracking page view:', error)
    }
  }

  static async trackClickEvent(data: Omit<ClickEvent, 'id' | 'createdAt'>) {
    try {
      await prisma.clickEvent.create({
        data: {
          element: data.element,
          page: data.page,
          userAgent: data.userAgent,
          ipAddress: data.ipAddress
        }
      })
    } catch (error) {
      console.error('Error tracking click event:', error)
    }
  }

  static async getPageViews(days = 30) {
    try {
      const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
      
      return await prisma.pageView.groupBy({
        by: ['page'],
        _count: { id: true },
        where: {
          createdAt: { gte: since }
        }
      })
    } catch (error) {
      console.error('Error getting page views:', error)
      return []
    }
  }
}
