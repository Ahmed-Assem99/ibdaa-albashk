import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

interface CountUpProps {
  value: number
  /** Size, weight and spacing; applied to the wrapper so the reserved width matches. */
  className?: string
  /** Colour or gradient for the visible number. */
  numberClassName?: string
}

/**
 * Counts from 0 to `value` when scrolled into view. The final number reserves its width
 * up front, so nothing around it shifts while counting. Shows the value immediately for
 * users who prefer reduced motion. Decorative: pair it with a screen-reader text.
 */
export function CountUp({ value, className, numberClassName }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const reduceMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setCurrent(Math.round(latest))
      },
    })
    return () => {
      controls.stop()
    }
  }, [inView, reduceMotion, value])

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn('relative inline-block tabular-nums', className)}
    >
      <span className="invisible">{value}</span>
      <span className={cn('absolute inset-0 block text-end', numberClassName)}>
        {reduceMotion ? value : current}
      </span>
    </span>
  )
}
