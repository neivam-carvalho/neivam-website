'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Profile, ContactFormData } from '../types'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

interface ContactProps {
  profile: Profile
  onMessageSent: (data: ContactFormData) => void
}

export default function Contact({ profile, onMessageSent }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        onMessageSent(data)
        reset()
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Vamos Conversar
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Tem um projeto em mente? Quer discutir oportunidades? 
            Entre em contato e vamos transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Informações de Contato
              </h3>
              
              {/* Email */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wide">Email</p>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-lg font-semibold text-neutral-900 hover:text-primary-600 transition-colors duration-300"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm text-neutral-500 uppercase tracking-wide">Redes Sociais</p>
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-semibold text-neutral-900 hover:text-primary-600 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h4 className="font-semibold text-primary-900 mb-2">
                ⚡ Resposta Rápida
              </h4>
              <p className="text-primary-700">
                Responderei sua mensagem em até 24 horas durante dias úteis.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 ${
                    errors.name ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="Assunto da mensagem (opcional)"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="Descreva seu projeto, ideia ou como posso ajudá-lo..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-neutral-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200"
                >
                  <CheckCircle size={20} />
                  <span>Mensagem enviada com sucesso! Responderei em breve.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200"
                >
                  <AlertCircle size={20} />
                  <span>Erro ao enviar mensagem. Tente novamente ou use o email direto.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
