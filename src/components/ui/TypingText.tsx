import { useEffect, useState } from 'react'

const TYPE_SPEED = 80
const DELETE_SPEED = 40
const HOLD_MS = 1600
const PAUSE_MS = 300

/** Cycles through `words`, typing and deleting each one, looping forever. */
export function TypingText({ words, className = '' }: { words: string[]; className?: string }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting' | 'pausing'>('typing')

  useEffect(() => {
    if (words.length === 0) return
    const current = words[wordIndex % words.length]

    if (phase === 'typing') {
      if (text.length < current.length) {
        const timer = window.setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED)
        return () => window.clearTimeout(timer)
      }
      const timer = window.setTimeout(() => setPhase('holding'), HOLD_MS)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'holding') {
      const timer = window.setTimeout(() => setPhase('deleting'), 0)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const timer = window.setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED)
        return () => window.clearTimeout(timer)
      }
      const timer = window.setTimeout(() => setPhase('pausing'), PAUSE_MS)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'pausing') {
      setWordIndex((index) => (index + 1) % words.length)
      setPhase('typing')
    }
  }, [text, phase, wordIndex, words])

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block w-[2px] animate-pulse bg-current align-[-0.1em]" style={{ height: '0.85em' }} aria-hidden="true" />
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
