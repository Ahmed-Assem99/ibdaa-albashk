import type { Partner } from '../../types/content'

/**
 * Organisations we have worked with or alongside, shown in the home page strip under the hero.
 * To show a logo, put the official file in public/images/partners/ and add a `logo` to the
 * entry here (the Arabic list reuses it automatically). Use logos only with permission.
 */
export const partners: { heading: string; list: Partner[] } = {
  heading: 'Experience alongside',
  list: [
    { name: 'Kalpataru', sector: 'Power transmission & solar' },
    { name: 'BP', sector: 'Oil & gas' },
    { name: 'Eni', sector: 'Oil & gas' },
    { name: 'ZAIN', sector: 'Telecommunications' },
    // TODO: Kuwait Energy was added from the documents in the brochure (acceptance
    // certificate and purchase order). Remove it if you don't want it listed.
    { name: 'Kuwait Energy', sector: 'Oil & gas' },
  ],
}
