import { Fragment } from 'react'
import { portfolioData } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { StatCounter } from '../ui/StatCounter'
import { TypingText } from '../ui/TypingText'

export function Hero() {
  const { personal, stats } = portfolioData

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-16 sm:px-10 lg:px-6">
      <div className="relative mx-auto grid w-full max-w-[88%] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {/* <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {personal.eyebrow}
          </Reveal> */}

          <Reveal
            as="h1"
            delay={80}
            className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight text-accent sm:text-6xl lg:text-[53px]"
          >
            <TypingText words={personal.roles} />
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="mt-5 max-w-lg text-xl font-semibold leading-snug text-heading sm:text-2xl"
          >
            {personal.heroHeadline}
          </Reveal>

          <Reveal delay={200} className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            Hi, I'm {personal.name}. {personal.tagline} {personal.heroIntro}
          </Reveal>

          <Reveal delay={260} className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/portfolio" variant="accent">
              View My Work
            </Button>
            <Button href={personal.resumeUrl} variant="primary" icon="download">
              Download Resume
            </Button>
            <Button to="/contact" variant="ghost" icon="arrow-right">
              Let's Talk
            </Button>
          </Reveal>

          <Reveal delay={320} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
            {stats.map((stat, index) => (
              <Fragment key={stat.label}>
                {index > 0 && <span className="hidden h-10 w-px bg-border sm:block" aria-hidden="true" />}
                <StatCounter stat={stat} compact />
              </Fragment>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <span
            className="absolute -right-3 -top-3 h-24 w-16 rounded-2xl bg-accent-soft"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-4 -left-4 h-16 w-24 rounded-2xl bg-accent/15"
            aria-hidden="true"
          />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-border bg-surface-muted">
            {personal.avatar ? (
              <img src={personal.avatar} alt={personal.name} className="h-full w-full object-cover" />
            ) : (
              <span className="font-display text-sm font-medium text-muted">[Profile Photo]</span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
