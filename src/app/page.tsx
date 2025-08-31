'use client'

import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ProfileService } from './lib/services'
import { Profile, ContactFormData } from './types'

export default function HomePage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await ProfileService.getProfile()
        setProfile(profileData)
      } catch (error) {
        console.error('Error loading profile:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()

    // Track page view
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: 'pageview', page: 'home' })
    }).catch(console.error)
  }, [])

  const trackClick = async (element: string) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'click', element, page: 'home' })
      })
    } catch (error) {
      console.error('Error tracking click:', error)
    }
  }

  const handleContactClick = () => {
    trackClick('contact-cta')
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSocialClick = (platform: string) => {
    trackClick(`social-${platform}`)
  }

  const handleProjectClick = (projectTitle: string) => {
    trackClick(`project-${projectTitle.toLowerCase().replace(/\s+/g, '-')}`)
  }

  const handleMessageSent = (data: ContactFormData) => {
    trackClick('contact-form-submit')
    console.log('Message sent:', data)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            Erro ao carregar perfil
          </h1>
          <p className="text-neutral-600 mb-6">
            Não foi possível carregar as informações do perfil.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="overflow-x-hidden">
      <Hero
        profile={profile}
        onContactClick={handleContactClick}
        onSocialClick={handleSocialClick}
      />
      
      <Expertise profile={profile} />
      
      <Projects
        profile={profile}
        onProjectClick={handleProjectClick}
      />
      
      <Contact
        profile={profile}
        onMessageSent={handleMessageSent}
      />
    </main>
  )
}
