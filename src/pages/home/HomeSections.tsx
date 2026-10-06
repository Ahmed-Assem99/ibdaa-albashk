import { ArrowRight, Building2, Mountain, PackageSearch, ShieldCheck, Truck } from 'lucide-react'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Highlight } from '@/components/ui/Highlight'
import { Img } from '@/components/ui/Img'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { featuredSection, safetyTeaser, servicesSection, statsSection } from '@/data/home'
import { partners, partnersHeading } from '@/data/partners'
import { featuredProjects } from '@/data/projects'
import { capabilities, services } from '@/data/services'
import { stats } from '@/data/stats'
import type { CapabilityIcon } from '@/types/content'

export function TrustStrip() {
  return (
    <section aria-labelledby="partners-title" className="bg-white">
      <Container className="flex flex-col items-center gap-6 py-10 lg:flex-row lg:gap-12">
        <h2
          id="partners-title"
          className="shrink-0 text-xs font-semibold tracking-[0.24em] text-gold-700 uppercase"
        >
          {partnersHeading}
        </h2>
        <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-between">
          {partners.map((partner) => (
            <li key={partner.name} className="text-center">
              <span className="block text-xl font-extrabold tracking-[0.14em] text-charcoal-700 uppercase sm:text-2xl">
                {partner.name}
              </span>
              <span className="mt-1 block text-[0.6875rem] tracking-wider text-charcoal-600 uppercase">
                {partner.sector}
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
  return (
    <section
      aria-labelledby="services-title"
      className="relative overflow-hidden surface-dark py-24 [clip-path:polygon(0_3rem,100%_0,100%_100%,0_100%)] sm:py-32"
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
          {featuredProjects.map((project, i) => (
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
