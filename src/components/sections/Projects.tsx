import type { ReactNode } from 'react'
import { portfolioData } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../ui/ProjectCard'

function RevealCard({ children, index }: { children: ReactNode; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${(index % 3) * 90}ms` }}>
      {children}
    </div>
  )
}

export function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="bg-surface-muted/50 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="A few products I've built end to end — from problem to production."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <RevealCard key={project.id} index={index}>
              <ProjectCard project={project} />
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  )
}
