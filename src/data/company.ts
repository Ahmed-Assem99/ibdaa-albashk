/**
 * Single source of truth for company identity and contact details.
 * Used by the navbar, footer, contact page, SEO tags, JSON-LD, sitemap and robots.txt.
 */
export const company = {
  name: 'Ibdaa Albashq',
  legalName: 'Ibdaa Albashq for General Contracting Ltd.',
  legalNameAr: 'شركة إبداع الباشق للمقاولات العامة والتجارة العامة والنقل العام المحدودة',
  // TODO: the brochure reads "Together We Building Iraq". Confirm the exact wording
  // (a grammatical alternative would be "Together, We Build Iraq").
  tagline: 'Together We Building Iraq',
  description:
    'Iraqi contractor delivering high-voltage transmission lines and substations, solar PV, oil & gas and telecommunications works across southern Iraq.',

  // TODO: replace with the production domain before launch (used for canonical URLs, sitemap, Open Graph).
  siteUrl: 'https://www.example.com',

  address: {
    // TODO: confirm the final office address. The brochure lists Baghdad – Almansoor;
    // the main operations are in Basra.
    lines: ['Almansoor', 'Baghdad, Iraq'],
    locality: 'Baghdad',
    country: 'IQ',
  },
  phone: {
    display: '+964 780 800 0007',
    href: 'tel:+9647808000007',
  },
  // TODO: confirm the public email. The brochure lists both ibdae.albashk@gmail.com
  // and info@albashkcompany.com.
  email: 'ibdae.albashk@gmail.com',
  // TODO: confirm working hours.
  workingHours: 'Sunday – Thursday · XX:00 – XX:00',

  // TODO: replace with the exact office location (Google Maps → Share → Embed a map → copy the src URL).
  mapEmbedUrl: 'https://www.google.com/maps?q=Al+Mansour,+Baghdad,+Iraq&output=embed',

  // TODO: replace the placeholder PDF in /public/docs with the final company profile.
  profilePdf: '/docs/ibdaa-albashq-company-profile.pdf',

  ogImage: '/images/og/og-image.jpg',
} as const

export type Company = typeof company
