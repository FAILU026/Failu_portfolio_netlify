import { portfolioData } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'

export function About() {
  const { about, personal } = portfolioData
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About Me" title="Who I am and how I work" />

        <div ref={ref} className="reveal mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {about.summary.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-text">
                {paragraph}
              </p>
            ))}
            <p className="border-l-2 border-accent pl-4 text-base italic leading-relaxed text-muted">
              {about.philosophy}
            </p>
            <p className="flex items-center gap-2 text-sm text-muted">
              <Icon name="map-pin" className="h-4 w-4 text-accent" />
              {personal.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {about.facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-display text-2xl font-bold text-heading">{fact.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
