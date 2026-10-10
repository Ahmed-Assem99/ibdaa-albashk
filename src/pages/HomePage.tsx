import { CtaBand } from '@/components/sections/CtaBand'
import { useContent } from '@/i18n/useLocale'
import { useSeo } from '@/hooks/useSeo'
import { Hero } from './home/Hero'
import { Landmark } from './home/Landmark'
import {
  FeaturedProjects,
  SafetyTeaser,
  ServicesSection,
  StatsBand,
  TrustStrip,
} from './home/HomeSections'

export function HomePage() {
  useSeo(useContent().pageMeta.home)

  return (
    <>
      <Hero />
      <TrustStrip />
      <Landmark />
      <ServicesSection />
      <StatsBand />
      <FeaturedProjects />
      <SafetyTeaser />
      <CtaBand />
    </>
  )
}
