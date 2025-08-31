'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Profile } from '../types'

interface ProjectsProps {
  profile: Profile
  onProjectClick: (projectTitle: string) => void
}

export default function Projects({ profile, onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, transformando desafios complexos em soluções elegantes e eficazes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {profile.projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-neutral-100"
              onClick={() => onProjectClick(project.title)}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {project.order === 1 ? '🚀' : project.order === 2 ? '📊' : '💡'}
                  </div>
                  <span className="text-sm font-medium text-neutral-500">
                    Projeto {project.order}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((projectTag) => (
                    <span
                      key={projectTag.id}
                      className="px-3 py-1 bg-white text-sm font-medium text-neutral-700 rounded-full border border-neutral-200"
                    >
                      {projectTag.tag.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver projeto
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 font-medium transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Gostou do que viu?
          </h3>
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
