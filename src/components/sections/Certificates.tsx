import { portfolioData } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'
import type { CertificationItem } from '../../types/portfolio'

function CertificateCard({ certification, index }: { certification: CertificationItem; index: number }) {
  const ref = useScrollReveal<HTMLElement>()

  const card = (
    <article
      ref={ref}
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent"
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-surface-muted">
        {certification.image ? (
          <img src={certification.image} alt={certification.name} className="h-full w-full object-cover" />
        ) : (
          <Icon name="award" className="h-10 w-10 text-muted" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-5">
        <h3 className="text-base font-semibold text-heading transition-colors group-hover:text-accent">
          {certification.name}
        </h3>
        <p className="text-sm text-muted">{certification.issuer}</p>
        {certification.date && <p className="mt-1 font-mono text-xs text-muted">{certification.date}</p>}
        {certification.credentialUrl && (
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-heading transition-colors group-hover:text-accent">
            View credential
            <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </article>
  )

  if (!certification.credentialUrl) return card

  return (
    <a href={certification.credentialUrl} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  )
}

export function Certificates() {
  const { certifications } = portfolioData

  return (
    <section id="certificates" className="bg-surface-muted/50 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications & credentials"
          description="Courses and certifications I've completed — more added as I earn them."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificateCard key={certification.id} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
