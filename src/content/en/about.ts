import type { ImageAsset, OrgUnit, Value } from '../../types/content'

export const story = {
  title: 'Our story',
  highlight: 'story',
  lead: 'The price of success is hard work, dedication to the job at hand, and the determination to apply the best of ourselves to every task.',
  // TODO: confirm the founding year. The CEO message in the brochure says 2015,
  // while the registration documents are dated 2018.
  paragraphs: [
    'Ibdaa Albashq for General Contracting Ltd. is an Iraqi limited liability company founded in Baghdad. Today our work is concentrated in southern Iraq, mainly in Basra, where we support power, energy, oil and gas, and telecommunications projects.',
    'Our core business covers high-voltage transmission lines and substations, solar PV power plants, oil and gas piping and maintenance, and telecommunications infrastructure, backed by civil works, earthworks, our own equipment fleet, and logistics and procurement.',
    'Our project teams stay involved from planning through to handover, with priorities that never change: safe operations, quality work, and completing projects on time.',
  ],
}

export const vision = {
  title: 'Vision',
  text: 'Our vision is the framework for our roadmap and guides every aspect of our business, describing what we need to accomplish to keep achieving sustainable, quality growth.',
}

export const mission = {
  title: 'Mission',
  text: 'Our mission declares our purpose as a company and is the standard against which we weigh our actions and decisions:',
  points: [
    'To help rebuild our homeland',
    'To inspire moments of optimism and happiness',
    'To create value and make a difference',
  ],
}

export const valuesIntro =
  'Five values express our shared understanding of what we believe, how we aim to behave and what we aspire to be as an organisation.'

export const values: Value[] = [
  {
    title: 'Safety',
    description:
      'Safety is good business. Everything we do relies on the safety of our workforce and the communities around us, and on the safe management of the environment.',
  },
  {
    title: 'Respect',
    description:
      'We comply with laws and regulations, hold ourselves to high ethical standards and value the relationships we have with the people we work with.',
  },
  {
    title: 'Excellence',
    description:
      'We work in a hazardous business and commit to excellence through systematic, disciplined management of our operations. If something is not right, we correct it.',
  },
  {
    title: 'Courage',
    description:
      'Achieving the best outcomes often takes the courage to face difficulty, speak up and do the right thing. We seek feedback and are unafraid to ask for help.',
  },
  {
    title: 'One Team',
    description:
      'Whatever the strength of the individual, we accomplish more together. We put the team ahead of personal success and trust each other to deliver.',
  },
]

export const capabilitiesSection = {
  title: 'Capabilities & equipment',
  highlight: 'equipment',
  intro:
    'We perform the majority of our work with our own workforce and equipment. This lets us manage the construction process directly, control costs and protect the schedule.',
  workforce: [
    'Own crews for earthworks, concrete, carpentry and general construction',
    'Specialists in installation of specialty products and equipment',
    'Heavy equipment and machinery mechanics',
  ],
  fleet: [
    'Earthmoving equipment: excavators, loaders, graders, rollers and dump trucks',
    'Mobile cranes and trailers',
    'Concrete plants, mixers and pumps',
    'Asphalt plants, pavers and compacting equipment',
    'Power generators',
  ],
  maintenance: [
    'A central equipment facility for major overhauls, repairs and modifications',
    'Site workshops sized to the equipment and scope of each project',
    'Periodic and preventive maintenance, adjustments and repairs',
  ],
  // TODO: the asphalt & concrete plants figure is from the brochure. Confirm it is current.
  figures: [
    { value: '+15', label: 'Heavy machines & vehicles' },
    { value: '2', label: 'Asphalt & concrete plants' },
  ],
}

export const hse = {
  title: 'Health, safety & quality',
  highlight: 'safety',
  lead: 'Our first duty is the occupational health and safety of everyone on our sites. Our objective is zero accidents, for our employees, temporary staff and subcontractors alike.',
  safetyTitle: 'Safety programmes',
  safety: [
    'Wide-spread awareness of health, safety and environmental programmes',
    'On-site safety rules and regulations defined in a documented safety plan',
    'Compliance with the safety requirements set out in each contract',
    'Reporting and documentation of any incident, injury or equipment damage',
    'Monthly reporting of man-hours against lost-time incidents',
    'Daily toolbox talks and safety training for all site crews',
  ],
  qualityTitle: 'Quality management (QMS & QA/QC)',
  quality: [
    'Projects delivered to the agreed programme, specification and cost',
    'A Quality Management System with clearly defined responsibilities',
    'Regular management reviews of the system’s effectiveness',
    'QA/QC plans applied on every project by trained staff',
    'Continuous monitoring and improvement of performance',
  ],
  images: [
    {
      src: '/images/team/toolbox-talk-stringing.webp',
      alt: 'Morning toolbox talk with a stringing crew at a transmission tower',
      width: 307,
      height: 243,
    },
    {
      src: '/images/team/hse-training-sessions.webp',
      alt: 'Safety training sessions held in a site office',
      width: 646,
      height: 646,
    },
  ] satisfies ImageAsset[],
}

export const orgChart = {
  title: 'Organisation',
  highlight: 'Organisation',
  top: ['CEO', 'General Manager'],
  departments: [
    {
      title: 'Construction & Contracting',
      roles: [
        'Project Manager',
        'Site Managers',
        'Site Supervisors, Foremen, QA/QC, HSE & Field Staff',
      ],
    },
    {
      title: 'Operations',
      roles: ['Operations Manager', 'Operations Coordinators', 'Manpower, Equipment & Resources'],
    },
    {
      title: 'Equipment',
      roles: [
        'Equipment Rental Manager',
        'Marketing Executives',
        'Maintenance Technicians & Riggers',
      ],
    },
    {
      title: 'QHSE',
      roles: ['QHSE Manager', 'Safety Officers & Supervisors', 'QA/QC Engineers'],
    },
    { title: 'Finance', roles: ['Finance Department', 'Account Staff'] },
    {
      title: 'HR & Administration',
      roles: ['HR & Administration', 'Government Relations Officer'],
    },
    {
      title: 'Purchasing',
      roles: ['Purchasing Department', 'Purchase Assistants & Local Purchasers'],
    },
  ] satisfies OrgUnit[],
}

export const about = {
  story,
  vision,
  mission,
  valuesIntro,
  values,
  capabilitiesSection,
  hse,
  orgChart,
}
