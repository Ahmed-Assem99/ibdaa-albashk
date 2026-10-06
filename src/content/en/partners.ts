import type { Partner } from '../../types/content'

/**
 * Organisations we have worked with or alongside, shown in the home page strip under the hero.
 * Each logo is the company's symbol (cropped from the files supplied), shown beside the name.
 * The Arabic list reuses these logos automatically.
 */
export const partners: { heading: string; list: Partner[] } = {
  heading: 'Experience alongside',
  list: [
    {
      name: 'Kalpataru',
      sector: 'Power transmission & solar',
      logo: {
        src: '/images/partners/kalpataru.webp',
        alt: 'Kalpataru logo',
        width: 145,
        height: 145,
      },
    },
    {
      name: 'BP',
      sector: 'Oil & gas',
      logo: { src: '/images/partners/bp.webp', alt: 'BP logo', width: 190, height: 192 },
    },
    {
      name: 'Eni',
      sector: 'Oil & gas',
      logo: { src: '/images/partners/eni.webp', alt: 'Eni logo', width: 160, height: 132 },
    },
    {
      name: 'ZAIN',
      sector: 'Telecommunications',
      logo: { src: '/images/partners/zain.webp', alt: 'ZAIN logo', width: 162, height: 152 },
    },
    // TODO: Kuwait Energy was added from the documents in the brochure (acceptance
    // certificate and purchase order). Remove it if you don't want it listed.
    {
      name: 'Kuwait Energy',
      sector: 'Oil & gas',
      logo: {
        src: '/images/partners/kuwait-energy.webp',
        alt: 'Kuwait Energy logo',
        width: 117,
        height: 129,
      },
    },
  ],
}
