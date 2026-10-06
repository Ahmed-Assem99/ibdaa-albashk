import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { ui } from '@/data/ui'
import { Container } from './Container'
import { DiagonalDivider } from './DiagonalDivider'
import { Highlight } from './Highlight'

interface Crumb {
  label: string
  to?: string
}

interface PageHeaderProps {
  title: string
  highlight?: string
  intro?: ReactNode
  breadcrumbs?: Crumb[]
  children?: ReactNode
}

/** Dark page banner with diagonal gold ribbons and a slanted bottom edge. */
export function PageHeader({
  title,
  highlight,
  intro,
  breadcrumbs = [],
  children,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden surface-dark pt-[calc(var(--header-height)+3.5rem)] pb-28 sm:pb-36">
      <div
        aria-hidden="true"
        className="absolute -end-24 -top-24 h-[140%] w-1/2 bg-gold-gradient opacity-90 [clip-path:polygon(70%_0,100%_0,100%_100%,20%_100%)] rtl:-scale-x-100"
      />
      <div
        aria-hidden="true"
        className="absolute -end-32 -top-24 h-[140%] w-1/2 bg-charcoal-950 [clip-path:polygon(78%_0,100%_0,100%_100%,30%_100%)] rtl:-scale-x-100"
      />
      <Container className="relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs tracking-wider text-charcoal-200 uppercase">
            {[{ label: ui.home, to: '/' }, ...breadcrumbs].map((crumb, i, all) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {crumb.to && i < all.length - 1 ? (
                  <Link to={crumb.to} className="hover:text-gold-300">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-gold-300">
                    {crumb.label}
                  </span>
                )}
                {i < all.length - 1 && (
                  <ChevronRight aria-hidden="true" className="size-3.5 rtl:-scale-x-100" />
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-6 flex gap-5">
          <span aria-hidden="true" className="w-1 shrink-0 bg-gold-gradient" />
          <div className="max-w-3xl">
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              <Highlight text={title} highlight={highlight} />
            </h1>
            {intro && <p className="mt-4 text-base text-charcoal-200 sm:text-lg">{intro}</p>}
          </div>
        </div>
        {children}
      </Container>
      <DiagonalDivider fill="white" />
    </header>
  )
}
