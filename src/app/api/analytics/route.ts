import { NextRequest, NextResponse } from 'next/server'
import { AnalyticsService } from '@/lib/services'
import { getClientIP, getUserAgent, getReferrer } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { event, page, element } = await request.json()

    if (event === 'pageview') {
      await AnalyticsService.trackPageView({
        page: page || 'home',
        userAgent: getUserAgent(request),
        ipAddress: getClientIP(request),
        referrer: getReferrer(request)
      })
    } else if (event === 'click') {
      await AnalyticsService.trackClickEvent({
        element: element || 'unknown',
        page: page || 'home',
        userAgent: getUserAgent(request),
        ipAddress: getClientIP(request)
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json({ error: 'Failed to track event' }, { status: 500 })
  }
}
