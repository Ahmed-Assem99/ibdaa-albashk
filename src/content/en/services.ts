import type { Capability, Service, ServiceCategory } from '../../types/content'

/** Human-readable labels for each category (used by filters, badges and cards). */
export const categoryLabels: Record<ServiceCategory, string> = {
  transmission: 'Electrical Transmission & Substations',
  solar: 'Solar',
  'oil-gas': 'Oil & Gas',
  telecom: 'Telecom',
  civil: 'Civil',
}

/** The four core business lines, shown as circular cards on the home page. */
export const services: Service[] = [
  {
    id: 'transmission',
    title: 'HV Transmission Lines & Substations',
    summary:
      '400kV double-circuit overhead transmission line works, from tower erection to conductor stringing and line crossings, plus HV substations and MV/LV networks.',
    points: [
      'Tower erection and assembly',
      'Conductor stringing with puller-tensioner equipment',
      'Line, road and power-line crossings',
      'High-voltage substations',
      'Medium- and low-voltage electrical networks',
    ],
    image: {
      src: '/images/services/transmission.webp',
      alt: 'Lattice transmission tower with stringing equipment at its base',
      width: 201,
      height: 268,
    },
  },
  {
    id: 'solar',
    title: 'Solar PV Power Plants',
    summary:
      'EPC and construction support for solar PV power plants, including work alongside Kalpataru.',
    // TODO: confirm the exact solar scope Ibdaa Albashq delivers.
    points: ['EPC construction support', 'Site preparation and civil works', 'Electrical works'],
    image: {
      src: '/images/services/solar-pv.webp',
      alt: 'Placeholder image for solar PV services',
      width: 800,
      height: 800,
      placeholder: true,
    },
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Piping & Maintenance',
    summary:
      'Piping construction, pipeline maintenance and rehabilitation, and civil works for oil and gas facilities, with experience alongside operators such as BP and Eni.',
    points: [
      'Piping and new pipeline construction',
      'Pipeline maintenance, replacement and rehabilitation',
      'Welding, hot tapping and cold cutting',
      'Storage tank construction and maintenance',
      'Civil construction works for oil and gas facilities',
    ],
    image: {
      src: '/images/services/oil-gas.webp',
      alt: 'Process tanks and red pipework on an oil and gas site',
      width: 516,
      height: 302,
    },
  },
  {
    id: 'telecom',
    title: 'Telecommunications',
    summary:
      'Telecom towers, fiber laying, generators and CCTV for telecom operators such as ZAIN.',
    points: [
      'Telecom tower foundations and installation',
      'Fiber cable laying and splicing',
      'Generator supply, installation and fuelling',
      'CCTV and IT room installation',
      'Tower site maintenance',
    ],
    image: {
      src: '/images/services/telecom.webp',
      alt: 'Red and white lattice telecom tower on a desert site',
      width: 516,
      height: 630,
    },
  },
]

/** Secondary capabilities that support the core business lines. */
export const capabilities: Capability[] = [
  {
    icon: 'building',
    title: 'Civil & Building Works',
    description:
      'Foundations, reinforced concrete, steel structures, site buildings and stations for industrial and public clients.',
  },
  {
    icon: 'earthworks',
    title: 'Earthworks & Roads',
    description:
      'Excavation, grading, compaction, access tracks and road rehabilitation using our own heavy equipment.',
  },
  {
    icon: 'fleet',
    title: 'Equipment & Plant Fleet',
    description:
      'An owned fleet of earthmoving equipment, cranes, generators and concrete and asphalt plants, maintained in our own workshops.',
  },
  {
    icon: 'logistics',
    title: 'Logistics & Procurement',
    description:
      'Sourcing and delivery of materials, equipment and spare parts from local and international suppliers, in line with local and international regulations.',
  },
]
