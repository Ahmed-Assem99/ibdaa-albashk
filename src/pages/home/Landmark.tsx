import { m } from 'motion/react'
import { ArrowRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { CountUp } from '@/components/ui/CountUp'
import { DiagonalDivider } from '@/components/ui/DiagonalDivider'
import { Highlight } from '@/components/ui/Highlight'
import { Img } from '@/components/ui/Img'
import { Reveal } from '@/components/ui/Reveal'
import { useContent } from '@/i18n/useLocale'

const ease = [0.22, 1, 0.36, 1] as const

/** Height marks (in metres) on the gold scale beside the photo. */
const marks = [0, 50, 100, 150]

/** Feature section for the 186 m tower: the tallest high-voltage transmission tower in Asia. */
export function Landmark() {
  const { home } = useContent()
  const { landmark } = home
  const { height, unit } = landmark

  return (
    <section
      id={landmark.id}
      aria-labelledby="landmark-title"
      className="relative overflow-hidden surface-dark bg-charcoal-950 pt-32 pb-40 [clip-path:polygon(0_3rem,100%_0,100%_100%,0_100%)] sm:pt-36 sm:pb-48"
    >
      {/* Decorative background: line texture, gold glow and a large outlined "186". */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgb(255_255_255/0.025)_0_1px,transparent_1px_34px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgb(217_169_79/0.18),transparent_55%)] rtl:bg-[radial-gradient(circle_at_30%_50%,rgb(217_169_79/0.18),transparent_55%)]" />
        <span className="absolute -start-6 bottom-10 text-[11rem] leading-none font-extrabold text-transparent [-webkit-text-stroke:1px_rgb(217_169_79/0.09)] sm:text-[16rem] lg:text-[20rem]">
          {height}
        </span>
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-gold-300 uppercase sm:text-sm">
            <Award aria-hidden="true" className="size-5" />
            {landmark.eyebrow}
          </p>
          <h2
            id="landmark-title"
            className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-white uppercase sm:text-5xl"
          >
            <Highlight text={landmark.title} highlight={landmark.highlight} />
          </h2>

          <p className="mt-8 flex items-end gap-3">
            <span className="sr-only">
              {landmark.heightLabel}: {height} {unit}
            </span>
            <CountUp
              value={height}
              className="text-8xl leading-none font-extrabold sm:text-9xl"
              numberClassName="text-gold-gradient"
            />
            <span
              aria-hidden="true"
              className="pb-2 text-3xl font-light text-gold-100 sm:pb-4 sm:text-4xl"
            >
              {unit}
            </span>
          </p>
          <p
            aria-hidden="true"
            className="mt-2 text-xs font-semibold tracking-[0.24em] text-charcoal-200 uppercase"
          >
            {landmark.heightLabel}
          </p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal-100 sm:text-lg">
            {landmark.text}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {landmark.scope.map((item) => (
              <li
                key={item}
                className="border border-gold-500/40 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wider text-gold-100 uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button
            to={landmark.cta.to}
            size="lg"
            className="mt-10"
            icon={<ArrowRight className="size-4" />}
          >
            {landmark.cta.label}
          </Button>
        </Reveal>

        {/* Photo in an angled gold frame, with a height scale running up its side. */}
        <div className="relative ps-16 sm:ps-20">
          <div aria-hidden="true" className="absolute inset-y-0 start-0 w-14 sm:w-16">
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              transition={{ duration: 1.6, ease }}
              className="absolute inset-y-0 end-0 w-3 origin-bottom border-e-2 border-gold-300 bg-[repeating-linear-gradient(to_top,var(--color-gold-500)_0_1px,transparent_1px_calc(100%/18.6))]"
            />
            {marks.map((mark) => (
              <span
                key={mark}
                className="absolute end-0 flex translate-y-1/2 items-center gap-1.5 text-[0.625rem] font-semibold text-charcoal-200 tabular-nums sm:text-xs"
                style={{ bottom: `${(mark / height) * 100}%` }}
              >
                {mark}
                <span className="h-0.5 w-3 bg-gold-300 sm:w-5" />
              </span>
            ))}
            <span className="absolute end-0 top-0 flex -translate-y-1/2 items-center gap-1 text-xs font-extrabold whitespace-nowrap text-gold-300 tabular-nums sm:gap-1.5 sm:text-base">
              {height} {unit}
              <span className="h-0.5 w-3 bg-gold-gradient sm:w-6" />
            </span>
          </div>

          <Reveal delay={0.1}>
            <figure className="-skew-x-3 bg-gold-gradient p-[3px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)] rtl:skew-x-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-800 sm:aspect-[5/5] lg:aspect-[4/5]">
                <Img
                  image={landmark.image}
                  className="absolute inset-0 size-full scale-110 skew-x-3 object-cover object-[44%_40%] rtl:-skew-x-3"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
              </div>
            </figure>
          </Reveal>
        </div>
      </Container>
      <DiagonalDivider fill="charcoal" />
    </section>
  )
}
