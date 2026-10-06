import { m } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { DiagonalDivider } from '@/components/ui/DiagonalDivider'
import { Img } from '@/components/ui/Img'
import { company } from '@/data/company'
import { hero } from '@/data/home'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
})

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden surface-dark"
    >
      <Img image={hero.image} priority className="absolute inset-0 -z-20 size-full object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/60 to-charcoal-950/10 rtl:bg-gradient-to-l"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-charcoal-950/80 to-transparent"
      />

      <Container className="pt-[calc(var(--header-height)+3rem)] pb-36 sm:pb-44">
        <m.p
          {...fadeUp(0)}
          className="text-xs font-semibold tracking-[0.3em] text-gold-300 uppercase sm:text-sm"
        >
          {hero.eyebrow}
        </m.p>
        <div className="mt-6 flex gap-5 sm:gap-7">
          <m.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-1.5 shrink-0 origin-top bg-gold-gradient sm:w-2"
          />
          <h1
            id="hero-title"
            className="text-6xl leading-[0.9] font-extrabold tracking-tight uppercase sm:text-8xl lg:text-9xl"
          >
            <span className="block">
              {hero.title.before}
              <span className="text-gold-gradient">{hero.title.accent}</span>
            </span>
            <span className="block">{hero.title.after}</span>
          </h1>
        </div>
        <m.div {...fadeUp(0.15)} className="mt-8 max-w-xl">
          <p className="border-b border-white/60 pb-3 text-2xl font-light text-white sm:text-3xl">
            “{company.tagline}”
          </p>
          <p className="mt-4 text-base leading-relaxed text-gold-100 sm:text-lg">
            {hero.valueStatement}
          </p>
        </m.div>
        <m.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap gap-4">
          <Button to={hero.primaryCta.to} size="lg" icon={<ArrowRight className="size-4" />}>
            {hero.primaryCta.label}
          </Button>
          <Button to={hero.secondaryCta.to} variant="outline" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </m.div>
      </Container>
      <DiagonalDivider fill="white" />
    </section>
  )
}
