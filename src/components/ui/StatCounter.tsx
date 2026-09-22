import { useEffect, useRef, useState } from 'react'
import type { Stat } from '../../types/portfolio'

function useCountUp(target: number, shouldStart: boolean, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const reducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const effectiveDuration = reducedMotion ? 0 : duration

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = effectiveDuration === 0 ? 1 : Math.min((now - start) / effectiveDuration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [shouldStart, target, duration])

  return value
}

export function StatCounter({ stat, compact = false }: { stat: Stat; compact?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  const numericTarget = Number(stat.value.replace(/[^\d]/g, '')) || 0
  const isPlaceholder = /\[.*\]/.test(stat.value)
  const count = useCountUp(numericTarget, inView && !isPlaceholder)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={compact ? '' : 'text-center sm:text-left'}>
      <p
        className={`font-display font-bold text-heading ${
          compact ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'
        }`}
      >
        {isPlaceholder ? stat.value : count}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className={`text-muted ${compact ? 'mt-0.5 text-xs' : 'mt-2 text-sm'}`}>{stat.label}</p>
    </div>
  )
}
