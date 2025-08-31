import { NextRequest, NextResponse } from 'next/server'
import { ContactService, AnalyticsService } from '@/lib/services'
import { getClientIP, getUserAgent } from '@/lib/utils'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = contactSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Dados inválidos', 
          details: validation.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const data = validation.data

    // Create contact message
    const message = await ContactService.createMessage(data)
    
    if (!message) {
      throw new Error('Failed to create message')
    }

    // Track analytics
    await AnalyticsService.trackClickEvent({
      element: 'contact-form',
      page: 'home',
      userAgent: getUserAgent(request),
      ipAddress: getClientIP(request)
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor. Tente novamente mais tarde.' 
      },
      { status: 500 }
    )
  }
}
