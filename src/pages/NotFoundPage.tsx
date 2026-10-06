import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { DiagonalDivider } from '@/components/ui/DiagonalDivider'
import { pageMeta } from '@/data/pages'
import { ui } from '@/data/ui'
import { useSeo } from '@/hooks/useSeo'

export function NotFoundPage() {
  useSeo(pageMeta.notFound)

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden surface-dark pt-[var(--header-height)] pb-32">
      <div
        aria-hidden="true"
        className="absolute -end-20 -top-20 h-[140%] w-1/3 bg-gold-gradient opacity-90 [clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)] rtl:-scale-x-100"
      />
      <Container className="relative">
        <p className="text-gold-gradient text-8xl font-extrabold sm:text-9xl">{ui.notFound.code}</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight uppercase sm:text-5xl">
          {ui.notFound.title}
        </h1>
        <p className="mt-4 max-w-md text-lg text-charcoal-200">{ui.notFound.text}</p>
        <Button to="/" size="lg" className="mt-10" icon={<ArrowRight className="size-4" />}>
          {ui.notFound.cta}
        </Button>
      </Container>
      <DiagonalDivider fill="white" />
    </section>
  )
}
