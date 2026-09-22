import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold text-heading sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button to="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </section>
  )
}
