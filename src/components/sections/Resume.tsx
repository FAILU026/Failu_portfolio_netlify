import { portfolioData } from '../../data/portfolio'
import type { ExperienceItem, Project, SkillCategory } from '../../types/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { TransitionLink } from '../ui/TransitionLink'

const skillCategories: SkillCategory[] = [
  'Frontend',
  'UI Libraries',
  'Architecture',
  'Backend',
  'Mobile',
  'Cloud & AI',
  'Tools',
  'Practices',
]

function ExperienceRow({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal border-l-2 border-border pl-5"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-base font-semibold text-heading">{item.role}</h4>
        <span className="font-mono text-xs uppercase tracking-wider text-accent">{item.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-muted">
        {item.company} · {item.location}
      </p>
      <p className="mt-2.5 text-sm leading-relaxed text-text">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-surface-muted px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectResumeRow({ project, index }: { project: Project; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal border-l-2 border-border pl-5"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h4 className="text-base font-semibold text-heading">{project.title}</h4>
          <p className="mt-0.5 text-xs font-medium text-accent">{project.subtitle}</p>
        </div>
        <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
          {project.category}
        </span>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-text">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-surface-muted px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function SkillGroup({ category }: { category: SkillCategory }) {
  const skills = portfolioData.skills.filter((skill) => skill.category === category)

  return (
    <div>
      <h4 className="text-sm font-semibold text-heading">{category}</h4>
      <ul className="mt-2 space-y-1.5">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center gap-2 text-sm text-muted">
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n.charAt(0))
    .join('')
}

export function Resume() {
  const { personal, about, experience, education, certifications, projects } = portfolioData

  return (
    <section id="resume" className="bg-surface-muted/50 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Resume"
            title="My background at a glance"
            description="A summary of my experience and the skills I bring to every project."
          />
          <Button href={personal.resumeUrl} variant="accent" icon="download">
            Download PDF Version
          </Button>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent-soft font-display text-2xl font-bold text-accent">
                {personal.avatar ? (
                  <img src={personal.avatar} alt={personal.name} className="h-full w-full object-cover" />
                ) : (
                  initials(personal.name)
                )}
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent sm:text-3xl">{personal.name}</p>
                <p className="mt-1 text-sm font-medium text-muted">{personal.title}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-2 lg:grid-cols-1">
              <span className="flex items-center gap-2.5">
                <Icon name="phone" className="h-4 w-4 text-accent" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-2.5">
                <Icon name="email" className="h-4 w-4 text-accent" />
                {personal.email}
              </span>
              <span className="flex items-center gap-2.5">
                <Icon name="globe" className="h-4 w-4 text-accent" />
                {personal.website}
              </span>
              <span className="flex items-center gap-2.5">
                <Icon name="map-pin" className="h-4 w-4 text-accent" />
                {personal.location}
              </span>
            </div>
          </div>

          <p className="mt-7 max-w-3xl border-t border-border pt-7 text-sm leading-relaxed text-text">
            {about.summary[0]}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Work Experience</h3>
              <div className="mt-5 space-y-8">
                {experience.map((item, index) => (
                  <ExperienceRow key={item.id} item={item} index={index} />
                ))}
              </div>

              <div className="mt-12 border-t border-border pt-10">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Selected Projects</h3>
                  <TransitionLink to="/portfolio" className="text-xs font-medium text-accent hover:underline">
                    View portfolio
                  </TransitionLink>
                </div>
                <div className="mt-5 space-y-7">
                  {projects.map((project, index) => (
                    <ProjectResumeRow key={project.id} project={project} index={index} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Skills</h3>
              <div className="mt-5 space-y-6">
                {skillCategories.map((category) => (
                  <SkillGroup key={category} category={category} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Education</h3>
              <div className="mt-5 space-y-5">
                {education.map((item) => (
                  <div key={item.degree} className="border-l-2 border-border pl-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-semibold text-heading">{item.degree}</h4>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {item.institution} · {item.location}
                    </p>
                    {item.detail && <p className="mt-1 text-sm text-text">{item.detail}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Certifications</h3>
                <TransitionLink to="/certificates" className="text-xs font-medium text-accent hover:underline">
                  View all
                </TransitionLink>
              </div>
              <ul className="mt-5 space-y-2">
                {certifications.map((certification) => (
                  <li key={certification.id} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {certification.name} <span className="text-xs text-muted/70">({certification.issuer})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
