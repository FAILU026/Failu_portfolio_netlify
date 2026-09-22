import type { Testimonial } from '../../types/portfolio'
import { Icon } from './Icon'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8">
      <div>
        <Icon name="quote" className="h-6 w-6 text-accent/50" />
        <blockquote className="mt-4 text-base leading-relaxed text-heading">
          “{testimonial.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-heading">{testimonial.name}</p>
          <p className="text-xs text-muted">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
