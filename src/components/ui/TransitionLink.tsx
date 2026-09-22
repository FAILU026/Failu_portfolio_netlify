import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { useTransitionNavigate } from '../../hooks/useTransitionNavigate'

interface TransitionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  children: ReactNode
}

/** An internal-route link that animates via the View Transitions API. */
export function TransitionLink({ to, children, onClick, ...rest }: TransitionLinkProps) {
  const navigate = useTransitionNavigate()

  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        event.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
