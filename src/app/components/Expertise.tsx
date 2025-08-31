'use client'

import { motion } from 'framer-motion'
import { Profile } from '../types'

interface ExpertiseProps {
  profile: Profile
}

export default function Expertise({ profile }: ExpertiseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="expertise" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Áreas de Especialização
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Expertise focada em transformação digital e liderança estratégica
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {profile.expertise.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 h-full">
                {/* Icon */}
                <div className="text-4xl mb-6 group-hover:animate-float">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Order Number */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <span className="text-2xl font-bold text-primary-600">
                    0{item.order}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Interessado em uma dessas áreas?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
          >
            Vamos conversar sobre suas ideias
          </button>
        </motion.div>
      </div>
    </section>
  )
}
