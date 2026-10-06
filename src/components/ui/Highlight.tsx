import { cn } from '@/lib/cn'

interface HighlightProps {
  text: string
  /** Substring of `text` to render in gold. Matching is case-insensitive. */
  highlight?: string
  /** `deep` keeps enough contrast on white backgrounds. */
  tone?: 'bright' | 'deep'
  className?: string
}

/** Renders `text` with one word or phrase in the gold gradient. */
export function Highlight({ text, highlight, tone = 'bright', className }: HighlightProps) {
  const index = highlight ? text.toLowerCase().indexOf(highlight.toLowerCase()) : -1
  if (!highlight || index < 0) return <>{text}</>

  const end = index + highlight.length
  return (
    <>
      {text.slice(0, index)}
      <span
        className={cn(
          tone === 'bright' ? 'text-gold-gradient' : 'text-gold-gradient-deep',
          className,
        )}
      >
        {text.slice(index, end)}
      </span>
      {text.slice(end)}
    </>
  )
}
