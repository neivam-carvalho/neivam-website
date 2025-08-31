'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Profile } from '../types'

interface ProjectsProps {
  profile: Profile
  onProjectClick: (projectTitle: string) => void
}

export default function Projects({ profile, onProjectClick }: ProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Seleção de trabalhos que demonstram expertise técnica e visão estratégica
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {profile.projects.map((project) => (
            <div
              key={project.id}
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100 h-full">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-primary-300">
                      {project.order === 1 ? '🚀' : project.order === 2 ? '📊' : '💡'}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((projectTag) => (
                      <span
                        key={projectTag.id}
                        className="px-3 py-1 text-sm font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-100"
                        style={{ 
                          backgroundColor: projectTag.tag.color ? `${projectTag.tag.color}20` : undefined,
                          borderColor: projectTag.tag.color || undefined 
                        }}
                      >
                        {projectTag.tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onProjectClick(project.title)}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        Ver Demo
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-300"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Gostou do que viu? Vamos criar algo incrível juntos!
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105"
          >
            Iniciar um projeto
          </button>
        </div>
      </div>
    </section>
  )
}
