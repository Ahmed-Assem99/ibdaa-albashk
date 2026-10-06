import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Highlight } from './Highlight'

interface SectionHeadingProps {
  title: string
  highlight?: string
  intro?: ReactNode
  /** `dark` for use on charcoal sections, `light` for white sections. */
  tone?: 'light' | 'dark'
  align?: 'start' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  id?: string
  className?: string
}

/** Light-weight uppercase section title with a thin gold rule, as in the brochure. */
export function SectionHeading({
  title,
  highlight,
  intro,
  tone = 'light',
  align = 'start',
  as: Tag = 'h2',
  id,
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <Tag
        id={id}
        className={cn(
          'text-3xl font-light tracking-wide uppercase sm:text-4xl',
          dark ? 'text-white' : 'text-charcoal-900',
        )}
      >
        <Highlight
          text={title}
          highlight={highlight}
          tone={dark ? 'bright' : 'deep'}
          className="font-semibold"
        />
      </Tag>
      <div
        aria-hidden="true"
        className={cn('mt-4 h-px w-28 bg-gold-gradient', align === 'center' && 'mx-auto')}
      />
      {intro && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            dark ? 'text-charcoal-200' : 'text-charcoal-600',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
