import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'
import { TransitionLink } from './TransitionLink'

type Variant = 'primary' | 'accent' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none px-6 py-3'

const variants: Record<Variant, string> = {
  primary: 'bg-heading text-bg hover:bg-accent-strong active:scale-[0.98] shadow-sm',
  accent: 'bg-accent text-accent-contrast hover:bg-accent-strong active:scale-[0.98] shadow-sm',
  secondary:
    'border border-border text-heading hover:border-accent hover:text-accent active:scale-[0.98]',
  ghost: 'text-heading hover:text-accent px-3 py-2',
}

interface CommonProps {
  variant?: Variant
  icon?: IconName
  iconPosition?: 'left' | 'right'
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined }

/** Internal route navigation, animated via the View Transitions API. */
type ButtonAsRoute = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; href?: undefined }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRoute

export function Button({
  variant = 'primary',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const iconEl = icon ? <Icon name={icon} className="h-4 w-4 shrink-0" /> : null

  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      <span>{children}</span>
      {iconPosition === 'right' && iconEl}
    </>
  )

  if ('to' in props && props.to !== undefined) {
    const { to, ...rest } = props as ButtonAsRoute
    return (
      <TransitionLink to={to} className={classes} {...rest}>
        {content}
      </TransitionLink>
    )
  }

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {content}
    </button>
  )
}
