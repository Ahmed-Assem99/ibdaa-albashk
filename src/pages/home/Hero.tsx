import { m } from 'motion/react'
import { ArrowRight, Award } from 'lucide-react'
import logoUrl from '@/assets/logo.svg'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { DiagonalDivider } from '@/components/ui/DiagonalDivider'
import { Img } from '@/components/ui/Img'
import { Link } from '@/i18n/Link'
import { useContent } from '@/i18n/useLocale'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

/** Vertical offsets that stagger the photo frames on large screens. */
const panelOffsets = ['lg:mt-20', 'lg:-mt-6', 'lg:mt-32']

export function Hero() {
  const { home, company, ui, categoryLabels } = useContent()
  const { hero } = home

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden surface-dark bg-charcoal-950"
    >
      {/* Background: texture, glow, diagonal ribbons and eagle watermark (all decorative). */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgb(255_255_255/0.03)_0_1px,transparent_1px_34px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgb(217_169_79/0.22),transparent_55%)] rtl:bg-[radial-gradient(circle_at_28%_45%,rgb(217_169_79/0.22),transparent_55%)]" />
        <div className="absolute -end-[10%] -top-1/4 hidden h-[150%] w-[38%] bg-charcoal-900 [clip-path:polygon(45%_0,100%_0,55%_100%,0_100%)] lg:block rtl:-scale-x-100" />
        <div className="absolute -end-[2%] -top-1/4 hidden h-[150%] w-[38%] bg-gold-gradient opacity-90 [clip-path:polygon(58%_0,64%_0,19%_100%,13%_100%)] lg:block rtl:-scale-x-100" />
        <img
          src={logoUrl}
          alt=""
          width={512}
          height={512}
          className="absolute -start-32 -bottom-40 size-[32rem] opacity-[0.04] grayscale"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal-950 to-transparent" />
      </div>

      <Container className="grid items-center gap-12 pt-[calc(var(--header-height)+3rem)] pb-36 sm:pb-44 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
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
              transition={{ duration: 0.8, ease }}
              className="w-1.5 shrink-0 origin-top bg-gold-gradient sm:w-2"
            />
            <h1
              id="hero-title"
              className="text-6xl leading-[0.9] font-extrabold tracking-tight uppercase sm:text-8xl xl:text-9xl ar:leading-[1.25]"
            >
              {hero.title.map((line, i) => (
                <span key={i} className="block">
                  {line.map((segment) =>
                    segment.accent ? (
                      <span key={segment.text} className="text-gold-gradient">
                        {segment.text}
                      </span>
                    ) : (
                      segment.text
                    ),
                  )}
                </span>
              ))}
            </h1>
          </div>
          <m.div {...fadeUp(0.15)} className="mt-8 max-w-xl">
            <p className="border-b border-white/60 pb-3 text-2xl font-light text-white sm:text-3xl">
              {ui.quote(company.tagline)}
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
          <m.div {...fadeUp(0.45)} className="mt-8">
            <Link
              to={`/#${home.landmark.id}`}
              className="group inline-flex items-center gap-2.5 border border-gold-500/40 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gold-100 backdrop-blur-sm transition hover:border-gold-300 hover:text-white"
            >
              <Award aria-hidden="true" className="size-4 shrink-0 text-gold-300" />
              {home.landmark.badge}
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              />
            </Link>
          </m.div>
        </div>

        {/* Angled photo frames from real project sites. */}
        <ul className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {hero.panels.map((panel, i) => (
            <m.li
              key={panel.image.src}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.25 + i * 0.12 }}
              className={panelOffsets[i]}
            >
              <figure className="-skew-x-6 bg-gold-gradient p-[3px] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.9)] rtl:skew-x-6">
                <div className="relative h-44 overflow-hidden bg-charcoal-800 sm:h-64 lg:h-80">
                  <Img
                    image={panel.image}
                    className="absolute inset-0 size-full scale-125 skew-x-6 object-cover rtl:-skew-x-6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />
                  {/* Captions are hidden on phones, where the frames are too narrow for them. */}
                  <figcaption className="absolute inset-x-0 bottom-0 hidden skew-x-6 px-3 pb-3 text-xs leading-snug font-semibold tracking-[0.02em] text-balance text-gold-100 sm:block lg:px-2.5 lg:text-[0.6875rem] lg:tracking-normal xl:px-4 xl:pb-4 xl:text-sm xl:tracking-[0.04em] rtl:-skew-x-6">
                    {/* Keep "&" with the following word so it never sits alone on a line. */}
                    {categoryLabels[panel.category].replace(' & ', ' &\u00a0')}
                  </figcaption>
                </div>
              </figure>
            </m.li>
          ))}
        </ul>
      </Container>
      <DiagonalDivider fill="white" />
    </section>
  )
}
