import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'
import { Icon } from '../ui/Icon'

export function Testimonials() {
  const { testimonials } = portfolioData
  const [index, setIndex] = useState(0)

  const go = (direction: 1 | -1) => {
    setIndex((prev) => (prev + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What people say"
            description="Placeholder feedback — to be replaced with real testimonials from clients and collaborators."
          />
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-heading transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-heading transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full shrink-0 px-1">
                <div className="mx-auto max-w-xl">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-accent' : 'w-1.5 bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
