'use client'

import Image from 'next/image'
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react'
import { Profile } from '../types'
import { useIsClient } from '../lib/hooks'

interface HeroProps {
  profile: Profile
  onContactClick: () => void
  onSocialClick: (platform: string) => void
}

export default function Hero({ profile, onContactClick, onSocialClick }: HeroProps) {
  const isClient = useIsClient()
  
  const handleScrollDown = () => {
    if (typeof window !== 'undefined') {
      const expertiseSection = document.getElementById('expertise')
      expertiseSection?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,132,199,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Profile Image */}
        <div
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl"
        >
          {profile.photoUrl ? (
            <Image
              src={profile.photoUrl}
              alt={profile.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-800">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
            {profile.name}
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-700 font-medium mb-4">
            {profile.title}
          </p>
          
          {profile.subtitle && (
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              {profile.subtitle}
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Vamos conversar
          </button>
          
          <button
            onClick={handleScrollDown}
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
          >
            Ver minha expertise
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-6"
        >
          {profile.socialLinks.map((link) => {
            const IconComponent = link.label.toLowerCase() === 'linkedin' ? Linkedin :
                               link.label.toLowerCase() === 'github' ? Github : Mail

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSocialClick(link.label.toLowerCase())}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <IconComponent className="w-6 h-6" />
              </a>
            )
          })}
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button 
            onClick={handleScrollDown}
            className="animate-bounce text-neutral-400 hover:text-primary-600 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
