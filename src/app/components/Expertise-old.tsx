'use client'

import { Profile } from '../types'

interface ExpertiseProps {
  profile: Profile
}

export default function Expertise({ profile }: ExpertiseProps) {
  return (
    'use client'

import { Profile } from '../types'

interface ExpertiseProps {
  profile: Profile
}

export default function Expertise({ profile }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Minha Expertise
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Transformo ideias em soluções digitais que geram resultados reais para empresas de todos os tamanhos.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {profile.expertise.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-100"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <span className="text-sm font-medium text-primary-600">
                  0{item.order}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Interessado em uma dessas áreas?
          </h3>
          <p className="text-lg text-neutral-600 mb-6">
            Interessado em uma dessas áreas?
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
          >
            Vamos conversar sobre suas ideias
          </button>
        </div>
      </div>
    </section>
  )
}
