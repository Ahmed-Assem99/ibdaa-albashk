import { useId } from 'react'
import { cn } from '@/lib/cn'

interface DiagonalDividerProps {
  /** Colour of the section that follows (fills the slanted area). */
  fill?: 'white' | 'charcoal' | 'charcoal-50'
  /** Show the gold ribbon along the slant. */
  ribbon?: boolean
  /** Which way the slant rises. */
  direction?: 'up' | 'down'
  className?: string
}

const fills = {
  white: 'fill-white',
  charcoal: 'fill-charcoal-900',
  'charcoal-50': 'fill-charcoal-50',
}

/**
 * Slanted edge with an optional gold ribbon, placed at the bottom of a
 * `relative` section. Pure SVG, no images.
 */
export function DiagonalDivider({
  fill = 'white',
  ribbon = true,
  direction = 'up',
  className,
}: DiagonalDividerProps) {
  const up = direction === 'up'
  const gradientId = useId()
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 lg:h-28',
        className,
      )}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="size-full rtl:-scale-x-100">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#d9a94f" />
            <stop offset="0.35" stopColor="#f6efb9" />
            <stop offset="0.65" stopColor="#efc869" />
            <stop offset="1" stopColor="#d9a94f" />
          </linearGradient>
        </defs>
        {ribbon && (
          <polygon
            points={up ? '0,104 1440,8 1440,34 0,120' : '0,8 1440,104 1440,120 0,34'}
            fill={`url(#${gradientId})`}
          />
        )}
        <polygon
          points={up ? '0,120 1440,34 1440,120' : '0,34 1440,120 0,120'}
          className={fills[fill]}
        />
      </svg>
    </div>
  )
}
