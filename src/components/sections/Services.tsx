import { portfolioData } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon, type IconName } from '../ui/Icon'
import type { Service } from '../../types/portfolio'

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border py-8 first:pt-0 last:border-none sm:grid-cols-[auto_auto_1fr] sm:items-center sm:gap-8"
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      <span className="font-display text-sm font-semibold text-accent">{service.number}</span>
      <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent sm:flex">
        <Icon name={service.icon as IconName} className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-heading transition-colors group-hover:text-accent">
          {service.title}
        </h3>
        <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
    </div>
  )
}

export function Services() {
  const { services } = portfolioData

  return (
    <section id="services" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="What I Do"
          title="How I can help"
          description="From a rough idea to a shipped product — here's where I add the most value."
        />

        <div className="mt-12">
          {services.map((service, index) => (
            <ServiceRow key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
