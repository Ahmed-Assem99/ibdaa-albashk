import { CtaBand } from '@/components/sections/CtaBand'
import { pageMeta } from '@/data/pages'
import { useSeo } from '@/hooks/useSeo'
import { Hero } from './home/Hero'
import {
  FeaturedProjects,
  SafetyTeaser,
  ServicesSection,
  StatsBand,
  TrustStrip,
} from './home/HomeSections'

export function HomePage() {
  useSeo(pageMeta.home)

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <StatsBand />
      <FeaturedProjects />
      <SafetyTeaser />
      <CtaBand />
    </>
  )
}
