import { useEffect, useState, type ReactNode } from 'react'

/**
 * Fades/slides children in shortly after mount — used for above-the-fold
 * content (like the hero) that should animate in immediately rather than
 * waiting on scroll, via the shared `.reveal` CSS transition.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'p' | 'h1'
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 30)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Tag className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
