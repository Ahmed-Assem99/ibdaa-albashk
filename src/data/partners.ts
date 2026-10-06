import type { Partner } from '../types/content'

/**
 * Organisations we have worked with or alongside. Shown as text (no logos) in the
 * home page trust strip. Adjust names and wording freely.
 */
export const partnersHeading = 'Experience alongside'

export const partners: Partner[] = [
  { name: 'Kalpataru', sector: 'Power transmission & solar' },
  { name: 'BP', sector: 'Oil & gas' },
  { name: 'Eni', sector: 'Oil & gas' },
  { name: 'ZAIN', sector: 'Telecommunications' },
  // TODO: Kuwait Energy was added from the documents in the brochure (acceptance
  // certificate and purchase order). Remove it if you don't want it listed.
  { name: 'Kuwait Energy', sector: 'Oil & gas' },
]
