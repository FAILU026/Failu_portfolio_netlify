import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { portfolioData } from '../../data/portfolio'
import { Icon, type IconName } from '../ui/Icon'
import { Button } from '../ui/Button'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

const iconBySocial: Record<string, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  twitter: 'twitter',
  instagram: 'instagram',
  dribbble: 'dribbble',
  email: 'email',
}

export function Contact() {
  const { personal, socials } = portfolioData
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('Email is not configured yet — reach out directly instead.')
      return
    }

    setSending(true)
    setError(null)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.currentTarget, {
        publicKey: PUBLIC_KEY,
      })
      setSubmitted(true)
    } catch {
      setError("Couldn't send your message — please email me directly instead.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="px-6 sm:px-10 lg:px-16 ">
      <div className="mx-auto max-w-5xl flex justify-center align-middle items-center  h-dvh">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-heading sm:text-4xl">
              Let's build something meaningful.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Have an idea, product or project in mind? Let's talk about how I can help turn it into reality.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm font-medium text-heading transition-colors hover:text-accent"
              >
                <Icon name="email" className="h-4 w-4 text-accent" />
                {personal.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <Icon name="map-pin" className="h-4 w-4 text-accent" />
                {personal.location}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.icon === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={iconBySocial[social.icon]} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="email" className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold text-heading">Thanks for reaching out!</p>
                <p className="max-w-xs text-sm text-muted">
                  I've got your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-heading">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-heading">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-heading">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-accent"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-heading">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-heading outline-none transition-colors focus:border-accent"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>
                  {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
