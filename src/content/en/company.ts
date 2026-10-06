import type { CompanyText } from '../../types/content'

export const companyText: CompanyText = {
  name: 'Ibdaa Albashq',
  /** Shown next to the logo mark. */
  logo: { first: 'Ibdaa', second: 'Albashq', subtitle: 'General Contracting' },
  // Corrected from the brochure's "Together We Building Iraq".
  tagline: 'Together, We Build Iraq',
  description:
    'Iraqi contractor delivering high-voltage transmission lines and substations, solar PV, oil & gas and telecommunications works across southern Iraq.',
  // TODO: confirm the final office address. The brochure lists Baghdad – Almansoor;
  // the main operations are in Basra.
  addressLines: ['Almansoor', 'Baghdad, Iraq'],
  // TODO: confirm the working days (hours confirmed as 9 AM – 5 PM).
  workingHours: 'Sunday – Thursday · 9:00 AM – 5:00 PM',
}
