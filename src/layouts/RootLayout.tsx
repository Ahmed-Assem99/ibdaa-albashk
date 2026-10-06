import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { Outlet, ScrollRestoration } from 'react-router'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ui } from '@/data/ui'

export function RootLayout() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-50 bg-gold-gradient px-4 py-3 text-sm font-semibold text-charcoal-950 focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          {ui.skipToContent}
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </MotionConfig>
    </LazyMotion>
  )
}
