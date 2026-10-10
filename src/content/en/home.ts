import type { HeroPanel, HeroTitleLine, ImageAsset } from '../../types/content'

/** Copy for the home page. */

/** Hero title lines; `accent` segments render in gold (the "A" of IBDAA, as in the brochure). */
const heroTitle: HeroTitleLine[] = [
  [{ text: 'IBDA' }, { text: 'A', accent: true }],
  [{ text: 'ALBASHQ' }],
]

/**
 * Real site photos shown in the angled frames beside the hero title.
 * Replace with high-resolution photos when available (see IMAGES.md).
 */
const heroPanels: HeroPanel[] = [
  {
    category: 'transmission',
    image: {
      src: '/images/gallery/transmission-corridor.webp',
      alt: 'Transmission line corridor with towers',
      width: 263,
      height: 361,
    },
  },
  {
    category: 'telecom',
    image: {
      src: '/images/services/telecom.webp',
      alt: 'Red and white lattice telecom tower on a desert site',
      width: 516,
      height: 630,
    },
  },
  {
    category: 'oil-gas',
    image: {
      src: '/images/services/oil-gas.webp',
      alt: 'Process tanks and red pipework on an oil and gas site',
      width: 516,
      height: 302,
    },
  },
]

const safetyImage: ImageAsset = {
  src: '/images/team/hse-training-sessions.webp',
  alt: 'Site crews in PPE attending safety training sessions',
  width: 646,
  height: 646,
}
export const hero = {
  eyebrow: 'General Contracting · Iraq',
  title: heroTitle,
  valueStatement:
    'High-voltage transmission, solar PV, oil & gas and telecom infrastructure, delivered safely by our own crews and equipment across southern Iraq.',
  primaryCta: { label: 'View Projects', to: '/projects' },
  secondaryCta: { label: 'Contact Us', to: '/contact' },
  panels: heroPanels,
}

const landmarkImage: ImageAsset = {
  src: '/images/landmark/tallest-tower-186m.webp',
  alt: 'Aerial view of the 186-metre high-voltage transmission tower flying the Iraqi flag beside a waterway',
  width: 1280,
  height: 960,
}

/**
 * Landmark achievement featured on the home page and linked from the hero badge.
 * TODO: confirm the project name, location, client and year, and keep a source for the
 * "tallest in Asia" claim (e.g. a client letter or press coverage).
 */
export const landmark = {
  id: 'landmark',
  badge: 'Builders of Asia’s tallest transmission tower · 186 m',
  eyebrow: 'Landmark achievement',
  title: 'Asia’s tallest high-voltage transmission tower',
  highlight: 'tallest',
  height: 186,
  unit: 'm',
  heightLabel: 'Tower height',
  text: 'Our crews carried out the construction, erection and conductor stringing of a 186-metre high-voltage transmission tower, the tallest in Asia. A milestone for our team and for Iraq’s power network.',
  scope: ['Construction', 'Tower erection', 'Conductor stringing'],
  cta: { label: 'View transmission projects', to: '/projects?category=transmission' },
  image: landmarkImage,
}

export const servicesSection = {
  title: 'Core services',
  highlight: 'services',
  intro:
    'Four business lines, supported by civil works, earthworks, our own fleet and in-house logistics.',
  cardCta: 'View projects',
}

export const statsSection = {
  title: 'Key numbers',
}

export const featuredSection = {
  title: 'Featured projects',
  highlight: 'projects',
  intro: 'A selection of recent and ongoing work.',
  cta: 'All projects',
}

export const safetyTeaser = {
  title: 'Safety first. Quality always.',
  highlight: 'Safety',
  text: 'Every shift starts with a toolbox talk. Documented safety plans, incident reporting and QA/QC plans run on every project, with one objective: zero accidents.',
  cta: { label: 'Our HSE approach', to: '/about#hse' },
  image: safetyImage,
}

export const finalCta = {
  title: 'Let’s build together',
  highlight: 'together',
  text: 'Tell us about your project, or download our company profile for prequalification.',
  cta: { label: 'Contact Us', to: '/contact' },
}
