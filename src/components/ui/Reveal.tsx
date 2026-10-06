import type { ReactNode } from 'react'
import { m } from 'motion/react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/**
 * Fades and lifts content into view once. Motion is reduced automatically for
 * users with `prefers-reduced-motion` (see MotionConfig in RootLayout).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </m.div>
  )
}
