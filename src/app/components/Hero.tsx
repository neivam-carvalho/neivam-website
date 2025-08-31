'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react'
import { Profile } from '../types'

interface HeroProps {
  profile: Profile
  onContactClick: () => void
  onSocialClick: (platform: string) => void
}

export default function Hero({ profile, onContactClick, onSocialClick }: HeroProps) {
  const handleScrollDown = () => {
    const expertiseSection = document.getElementById('expertise')
    expertiseSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src={profile.photoUrl || '/images/neivam_black.jpeg'}
              alt={profile.name}
              fill
              className="rounded-full object-cover shadow-2xl ring-4 ring-white"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 font-semibold mb-2">
            {profile.title}
          </h2>
          {profile.subtitle && (
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              "{profile.subtitle}"
            </p>
          )}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-neutral-500 text-lg">📍 {profile.location}</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            Entre em Contato
          </button>
          
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            Email Direto
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-6 justify-center mb-12"
        >
          {profile.socialLinks.map((link) => {
            const IconComponent = link.label === 'LinkedIn' ? Linkedin : 
                                link.label === 'GitHub' ? Github : Mail

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSocialClick(link.label.toLowerCase())}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-primary-50"
              >
                <IconComponent size={24} className="text-neutral-700 hover:text-primary-600" />
              </a>
            )
          })}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="animate-bounce"
        >
          <button
            onClick={handleScrollDown}
            className="text-neutral-400 hover:text-primary-600 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
