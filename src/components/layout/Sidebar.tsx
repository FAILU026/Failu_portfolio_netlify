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

export function Sidebar() {
  const { personal, nav, socials, projects } = portfolioData
  const { pathname } = useLocation()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[300px] flex-col justify-between overflow-y-auto border-r border-border bg-surface px-7 py-9 lg:flex">
      <div>
        <div className="flex flex-col items-start">
          <div className="relative">
            <div className="flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full bg-accent-soft font-display text-xl font-bold text-accent ring-4 ring-surface">
              {personal.avatar ? (
                <img src={personal.avatar} alt={personal.name} className="h-full w-full object-cover" />
              ) : (
                personal.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n.charAt(0))
                  .join('')
              )}
            </div>
          </div>
          <h1 className="mt-4 text-xl font-bold text-heading">{personal.name}</h1>
          <p className="mt-1 text-sm font-medium text-muted">{personal.title}</p>
        </div>

        <div className="mt-5 flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.icon === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name={iconBySocial[social.icon]} className="h-3.5 w-3.5" />
            </a>
          ))}
          <ThemeToggle className="ml-auto h-8 w-8" />
        </div>

        <div className="my-7 h-px bg-border" aria-hidden="true" />

        <nav aria-label="Primary">
          <ul className="space-y-1">
            {nav.map((item) => {
              const isActive = pathname === item.path
              const badge = item.icon === 'layout' ? projects.length : item.badge

              return (
                <li key={item.path}>
                  <TransitionLink
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-accent text-accent-contrast'
                        : 'text-text hover:bg-surface-muted hover:text-heading'
                    }`}
                  >
                    <Icon name={item.icon} className="h-4 w-4 shrink-0" />
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

      <div className="pt-6">
        <Button to="/contact" variant="primary" icon="arrow-up-right" className="w-full">
          Hire Me
        </Button>
      </div>
    </aside>
  )
}
