/** Copy for the home page. */
export const hero = {
  eyebrow: 'General Contracting · Iraq',
  /** Rendered as "IBDA" + gold "A" on the first line and "ALBASHQ" on the second, as in the brochure. */
  title: { before: 'IBDA', accent: 'A', after: 'ALBASHQ' },
  valueStatement:
    'High-voltage transmission, solar PV, oil & gas and telecom infrastructure, delivered safely by our own crews and equipment across southern Iraq.',
  primaryCta: { label: 'View Projects', to: '/projects' },
  secondaryCta: { label: 'Contact Us', to: '/contact' },
  image: {
    src: '/images/hero/hero.webp',
    alt: '',
    width: 1920,
    height: 1080,
  },
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
  image: {
    src: '/images/team/hse-training-sessions.webp',
    alt: 'Site crews in PPE attending safety training sessions',
    width: 646,
    height: 646,
  },
}

export const finalCta = {
  title: 'Let’s build together',
  highlight: 'together',
  text: 'Tell us about your project, or download our company profile for prequalification.',
  cta: { label: 'Contact Us', to: '/contact' },
  secondaryCta: 'Company profile (PDF)',
}
