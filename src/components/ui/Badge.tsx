import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface BadgeProps {
  children: ReactNode
  tone?: 'gold' | 'dark' | 'light' | 'success'
  className?: string
}

const tones = {
  gold: 'bg-gold-gradient text-charcoal-950',
  dark: 'bg-charcoal-900/85 text-gold-100 backdrop-blur',
  light: 'bg-charcoal-100 text-charcoal-800',
  success: 'bg-emerald-50 text-emerald-800',
}

export function Badge({ children, tone = 'light', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wider uppercase',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
