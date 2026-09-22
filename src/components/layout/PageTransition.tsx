import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Fades/slides the routed page content in on every navigation by
 * remounting a keyed element, which restarts the `.page-enter` CSS
 * animation. Works alongside the native View Transitions API (see
 * useTransitionNavigate), which smooths the outgoing/incoming swap
 * where supported.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}
