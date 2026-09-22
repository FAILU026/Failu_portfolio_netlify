import { portfolioData } from '../../data/portfolio'
import { Icon, type IconName } from '../ui/Icon'

const iconBySocial: Record<string, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  twitter: 'twitter',
  instagram: 'instagram',
  dribbble: 'dribbble',
  email: 'email',
}

export function Footer() {
  const { personal, socials } = portfolioData
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          © {year} {personal.name}. All Rights Reserved..
        </p>
        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.icon === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <Icon name={iconBySocial[social.icon]} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
