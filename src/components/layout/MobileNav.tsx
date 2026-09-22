import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { portfolioData } from '../../data/portfolio'
import { Icon, type IconName } from '../ui/Icon'
import { Button } from '../ui/Button'
import { TransitionLink } from '../ui/TransitionLink'
import { ThemeToggle } from './ThemeToggle'

const iconBySocial: Record<string, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  twitter: 'twitter',
  instagram: 'instagram',
  dribbble: 'dribbble',
  email: 'email',
}

export function MobileNav() {
  const { personal, nav, socials, projects } = portfolioData
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-surface/90 px-5 py-4 backdrop-blur-sm lg:hidden">
      <TransitionLink to="/" className="font-display text-base font-bold text-heading">
        {personal.name}
      </TransitionLink>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-heading"
        >
          <Icon name="menu" className="h-4 w-4" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-heading/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col justify-between bg-surface p-7 shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <p className="font-display text-lg font-bold text-heading">{personal.name}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-heading"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1 text-sm text-accent">{personal.title}</p>

          <nav className="mt-8" aria-label="Mobile primary">
            <ul className="space-y-1">
              {nav.map((item) => {
                const isActive = pathname === item.path
                const badge = item.icon === 'layout' ? projects.length : item.badge

                return (
                  <li key={item.path}>
                    <TransitionLink
                      to={item.path}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                        isActive ? 'bg-accent text-accent-contrast' : 'text-heading hover:bg-surface-muted'
                      }`}
                    >
                      <Icon name={item.icon} className={`h-4 w-4 shrink-0 ${isActive ? '' : 'text-accent'}`} />
                      <span className="flex-1">{item.label}</span>
                      {badge !== undefined && (
                        <span
                          className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                            isActive ? 'bg-accent-contrast/20' : 'bg-surface-muted text-muted'
                          }`}
                        >
                          {badge}
                        </span>
                      )}
                    </TransitionLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.icon === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon name={iconBySocial[social.icon]} className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Button to="/contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  )
}
