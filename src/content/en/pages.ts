import type { PageMeta } from '../../types/content'

/** Per-page <title> and meta description. */
export const pageMeta = {
  home: {
    title: 'High-Voltage, Solar, Oil & Gas and Telecom Contractor in Iraq',
    description:
      'Ibdaa Albashq is an Iraqi contractor and builder of Asia’s tallest high-voltage transmission tower (186 m), delivering 400kV transmission lines and substations, solar PV, oil & gas and telecom infrastructure in Basra and southern Iraq.',
  },
  projects: {
    title: 'Projects',
    description:
      'Transmission line, solar, oil & gas, telecom and civil projects delivered by Ibdaa Albashq across Basra and southern Iraq.',
  },
  about: {
    title: 'About Us',
    description:
      'Our story, values, capabilities, equipment fleet, HSE and quality approach, and organisation at Ibdaa Albashq for General Contracting Ltd.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Contact Ibdaa Albashq for General Contracting Ltd. for transmission, solar, oil & gas and telecom projects in Iraq, or request our company profile.',
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist.',
  },
} satisfies Record<string, PageMeta>

export const projectsPage = {
  title: 'Our projects',
  highlight: 'projects',
  intro:
    'Transmission lines, solar, oil & gas, telecom and civil works across Basra and southern Iraq.',
  allLabel: 'All',
  empty: 'No projects in this category yet.',
  galleryTitle: 'Photo gallery',
  galleryHighlight: 'gallery',
  galleryIntro: 'Photos from our sites.',
}

export const aboutPage = {
  title: 'About us',
  highlight: 'us',
  intro: 'An Iraqi contractor built on safety, quality and commitment to time.',
  documentsTitle: 'Company documents',
  documentsHighlight: 'documents',
  documentsIntro: 'Registration and project credentials are available for prequalification.',
}

export const contactPage = {
  title: 'Contact us',
  highlight: 'us',
  intro: 'Tell us about your project and our team will get back to you.',
  detailsTitle: 'Get in touch',
  formTitle: 'Send us a message',
  formHighlight: 'message',
  profileTitle: 'Request for prequalification',
  profileText:
    'Download our company profile with our services, organisation, equipment and project references.',
  profileCta: 'Download company profile (PDF)',
}
