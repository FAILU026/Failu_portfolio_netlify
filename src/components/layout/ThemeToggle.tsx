import { useTheme } from '../../hooks/useTheme'
import { Icon } from '../ui/Icon'

export function ThemeToggle({ className = 'h-10 w-10' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={theme === 'light'}
      className={`inline-flex items-center justify-center rounded-full border border-border text-heading transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Icon name={theme === 'light' ? 'moon' : 'sun'} className="h-4 w-4" />
    </button>
  )
}
