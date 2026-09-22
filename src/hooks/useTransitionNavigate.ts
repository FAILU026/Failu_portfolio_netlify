import { useNavigate } from 'react-router-dom'

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void
}

/**
 * Navigates via React Router, wrapped in the native View Transitions API
 * when the browser supports it, so route changes cross-fade instead of
 * hard-cutting. Falls back to a plain navigate for unsupported browsers
 * and skips the transition entirely under prefers-reduced-motion.
 */
export function useTransitionNavigate() {
  const navigate = useNavigate()

  return (to: string) => {
    const doc = document as DocumentWithViewTransition
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion && typeof doc.startViewTransition === 'function') {
      doc.startViewTransition(() => navigate(to))
    } else {
      navigate(to)
    }
  }
}
