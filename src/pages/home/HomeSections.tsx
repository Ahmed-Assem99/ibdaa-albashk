import { ArrowRight, Building2, Mountain, PackageSearch, ShieldCheck, Truck } from 'lucide-react'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Highlight } from '@/components/ui/Highlight'
import { Img } from '@/components/ui/Img'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useContent } from '@/i18n/useLocale'
import type { CapabilityIcon } from '@/types/content'

export function TrustStrip() {
  const { partners } = useContent()
  return (
    <section aria-labelledby="partners-title" className="bg-white">
      <Container className="py-12">
        <h2
          id="partners-title"
          className="text-center text-xs font-semibold tracking-[0.24em] text-gold-700 uppercase"
        >
          {partners.heading}
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {partners.list.map((partner) => (
            <li key={partner.name} className="group flex items-center justify-center gap-3">
              {partner.logo && (
                <Img
                  image={{ ...partner.logo, alt: '' }}
                  className="size-11 shrink-0 object-contain transition duration-300 motion-safe:group-hover:scale-110 sm:size-12"
                />
              )}
              <span className={partner.logo ? 'text-start' : 'text-center'}>
                <span
                  lang="en"
                  className="block text-base leading-tight font-extrabold tracking-[0.1em] text-charcoal-700 uppercase sm:text-lg"
                >
                  {partner.name}
                </span>
                <span className="mt-1 block text-[0.6875rem] tracking-wider text-charcoal-600 uppercase">
                  {partner.sector}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

const capabilityIcons: Record<CapabilityIcon, typeof Building2> = {
  building: Building2,
  earthworks: Mountain,
  fleet: Truck,
  logistics: PackageSearch,
}

export function ServicesSection() {
  const { home, services, capabilities } = useContent()
  const { servicesSection } = home
  return (
    <section
      aria-labelledby="services-title"
      className="relative overflow-hidden surface-dark py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -end-10 -top-10 h-72 w-72 bg-gold-gradient opacity-10 blur-3xl"
      />
      <Container className="relative">
        <SectionHeading
          id="services-title"
          tone="dark"
          align="center"
          title={servicesSection.title}
          highlight={servicesSection.highlight}
          intro={servicesSection.intro}
        />
        <ul className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, i) => (
            <li key={service.id}>
              <Reveal delay={i * 0.08} className="h-full">
                <ServiceCard service={service} ctaLabel={servicesSection.cardCta} />
              </Reveal>
            </li>
          ))}
        </ul>
        <ul className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capabilityIcons[capability.icon]
            return (
              <li key={capability.title} className="bg-charcoal-900 p-6">
                <Icon aria-hidden="true" className="size-6 text-gold-300" />
                <h3 className="mt-4 text-sm font-semibold tracking-wider text-white uppercase">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-200">
                  {capability.description}
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export function StatsBand() {
  const { home, stats } = useContent()
  const { statsSection } = home
  return (
    <section aria-labelledby="stats-title" className="relative bg-gold-gradient">
      <h2 id="stats-title" className="sr-only">
        {statsSection.title}
      </h2>
      <Container>
        <dl className="grid grid-cols-2 divide-charcoal-950/15 py-12 lg:grid-cols-4 lg:divide-x rtl:lg:divide-x-reverse">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse items-center px-4 py-4 text-center"
            >
              <dt className="mt-2 text-xs font-semibold tracking-[0.18em] text-charcoal-900 uppercase">
                {stat.label}
              </dt>
              <dd className="text-4xl font-extrabold text-charcoal-950 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export function FeaturedProjects() {
  const { home, projects } = useContent()
  const { featuredSection } = home
  return (
    <section aria-labelledby="featured-title" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="featured-title"
            title={featuredSection.title}
            highlight={featuredSection.highlight}
            intro={featuredSection.intro}
          />
          <Button
            to="/projects"
            variant="outline-dark"
            icon={<ArrowRight className="size-4" />}
            className="self-start sm:self-auto"
          >
            {featuredSection.cta}
          </Button>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <li key={project.slug}>
                <Reveal delay={i * 0.08} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  )
}

export function SafetyTeaser() {
  const { home } = useContent()
  const { safetyTeaser } = home
  return (
    <section aria-labelledby="safety-title" className="bg-charcoal-50 py-24 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute -start-4 -top-4 h-2/3 w-2/3 bg-gold-gradient"
          />
          <Img
            image={safetyTeaser.image}
            className="relative aspect-square w-full object-cover shadow-2xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ShieldCheck aria-hidden="true" className="size-10 text-gold-700" />
          <h2
            id="safety-title"
            className="mt-5 text-3xl font-extrabold tracking-tight text-charcoal-900 uppercase sm:text-5xl"
          >
            <Highlight text={safetyTeaser.title} highlight={safetyTeaser.highlight} tone="deep" />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-700">{safetyTeaser.text}</p>
          <Button
            to={safetyTeaser.cta.to}
            variant="outline-dark"
            className="mt-8"
            icon={<ArrowRight className="size-4" />}
          >
            {safetyTeaser.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
