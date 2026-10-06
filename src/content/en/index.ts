import { about } from './about'
import { companyText } from './company'
import { documents } from './documents'
import { gallery } from './gallery'
import {
  featuredSection,
  finalCta,
  hero,
  safetyTeaser,
  servicesSection,
  statsSection,
} from './home'
import { mainNav } from './navigation'
import { aboutPage, contactPage, pageMeta, projectsPage } from './pages'
import { partners } from './partners'
import { projectReferences, projects } from './projects'
import { capabilities, categoryLabels, services } from './services'
import { stats } from './stats'
import { ui } from './ui'

/** English site content. Its shape defines `SiteContent`, which every other language must match. */
export const en = {
  company: companyText,
  nav: mainNav,
  ui,
  pageMeta,
  pages: { projects: projectsPage, about: aboutPage, contact: contactPage },
  home: { hero, servicesSection, statsSection, featuredSection, safetyTeaser, finalCta },
  services,
  categoryLabels,
  capabilities,
  partners,
  stats,
  projects,
  projectReferences,
  about,
  documents,
  gallery,
}

export type SiteContent = typeof en
