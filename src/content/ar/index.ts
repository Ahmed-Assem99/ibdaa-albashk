import { gallery } from '../en/gallery'
import type { SiteContent } from '../en'
import { localizeImageAlts } from '../localize-images'
import { about } from './about'
import { companyText } from './company'
import { documents } from './documents'
import {
  featuredSection,
  finalCta,
  hero,
  landmark,
  safetyTeaser,
  servicesSection,
  statsSection,
} from './home'
import { imageAlts } from './image-alts'
import { mainNav } from './navigation'
import { pageMeta, pages } from './pages'
import { partners } from './partners'
import { projectReferences, projects } from './projects'
import { capabilities, categoryLabels, services } from './services'
import { stats } from './stats'
import { ui } from './ui'

/**
 * Arabic site content. Must match the shape of the English bundle (enforced by the
 * `SiteContent` type and src/content/i18n.test.ts). Images are shared with English;
 * their alt text is swapped for the Arabic versions in ./image-alts.ts.
 */
export const ar: SiteContent = localizeImageAlts(
  {
    company: companyText,
    nav: mainNav,
    ui,
    pageMeta,
    pages,
    home: {
      hero,
      landmark,
      servicesSection,
      statsSection,
      featuredSection,
      safetyTeaser,
      finalCta,
    },
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
  },
  imageAlts,
)
