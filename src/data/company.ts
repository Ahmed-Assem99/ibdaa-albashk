/**
 * Shared, language-independent company details: contact info, domain and assets.
 * Used by the navbar, footer, contact page, SEO tags, JSON-LD, sitemap and robots.txt.
 * Translatable text (name, tagline, address lines, hours) lives in src/content/<locale>/company.ts.
 */
export const company = {
  legalName: 'Ibdaa Albashq for General Contracting Ltd.',
  legalNameAr: 'شركة إبداع الباشق للمقاولات العامة والتجارة العامة والنقل العام المحدودة',

  // TODO: replace with the production domain before launch (used for canonical URLs, sitemap, Open Graph).
  siteUrl: 'https://www.example.com',

  // TODO: confirm the final office address (see src/content/*/company.ts for the address lines).
  address: {
    locality: 'Baghdad',
    country: 'IQ',
  },
  phone: {
    display: '+964 780 800 0007',
    href: 'tel:+9647808000007',
  },
  email: 'info@albashkcompany.com',

  // TODO: replace with the exact office location (Google Maps → Share → Embed a map → copy the src URL).
  mapEmbedUrl: 'https://www.google.com/maps?q=Al+Mansour,+Baghdad,+Iraq&output=embed',

  // TODO: replace the placeholder PDF in /public/docs with the final company profile.
  profilePdf: '/docs/ibdaa-albashq-company-profile.pdf',

  ogImage: '/images/og/og-image.jpg',
} as const
