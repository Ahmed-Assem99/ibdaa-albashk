import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Highlight } from '@/components/ui/Highlight'
import { Reveal } from '@/components/ui/Reveal'
import { company } from '@/data/company'
import { useContent } from '@/i18n/useLocale'

/** Closing call to action, shared by several pages. */
export function CtaBand() {
  const { home, ui } = useContent()
  const { finalCta } = home
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden surface-dark">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -start-20 w-2/3 bg-gold-gradient opacity-95 [clip-path:polygon(0_0,62%_0,38%_100%,0_100%)] rtl:-scale-x-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -start-28 w-2/3 bg-charcoal-950 [clip-path:polygon(0_0,55%_0,31%_100%,0_100%)] rtl:-scale-x-100"
      />
      <Container className="relative py-20 sm:py-24">
        <Reveal className="ms-auto max-w-2xl">
          <h2
            id="cta-title"
            className="text-3xl font-extrabold tracking-tight uppercase sm:text-5xl"
          >
            <Highlight text={finalCta.title} highlight={finalCta.highlight} />
          </h2>
          <p className="mt-5 text-lg text-charcoal-200">{finalCta.text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={finalCta.cta.to} size="lg" icon={<ArrowRight className="size-4" />}>
              {finalCta.cta.label}
            </Button>
            <Button
              href={company.profilePdf}
              download
              variant="outline"
              size="lg"
              icon={<Download className="size-4" />}
            >
              {ui.companyProfile}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
