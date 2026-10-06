import type { ImageAsset, Project, ProjectReference } from '../types/content'

const P = '/images/projects'

function photo(src: string, alt: string, width: number, height: number): ImageAsset {
  return { src, alt, width, height }
}

function placeholderCover(slug: string, alt: string): ImageAsset {
  return { src: `${P}/${slug}/cover.webp`, alt, width: 1200, height: 800, placeholder: true }
}

/**
 * Project portfolio. Shown on /projects, /projects/:slug and (if `featured`) on the home page.
 * Entries are based on the company profile; anything uncertain carries a `todo` note.
 * `todo` is never rendered — it is only for whoever maintains the content.
 */
export const projects: Project[] = [
  {
    slug: '400kv-ohtl-basra',
    title: '400kV Double-Circuit Overhead Transmission Line',
    category: 'transmission',
    location: 'Basra Governorate (Al-Zubair, Abu Al-Khaseeb, Safwan)',
    period: '2025 – present',
    status: 'ongoing',
    featured: true,
    summary:
      'Construction works on a 400kV double-circuit overhead transmission line in southern Basra, covering tower works, conductor stringing and crossings of existing power lines.',
    scope: [
      'Tower erection and assembly',
      'Conductor stringing with puller-tensioner equipment',
      'Conductor compression jointing',
      'Power line and road crossings',
      'Daily toolbox talks and HSE briefings for site crews',
    ],
    cover: photo(
      `${P}/400kv-ohtl-basra/tower-stringing.webp`,
      'Crew stringing conductor at a 400kV lattice tower',
      201,
      268,
    ),
    gallery: [
      photo(
        `${P}/400kv-ohtl-basra/tower-loc-110.webp`,
        'Completed 400kV tower at location 110 with stringing equipment',
        279,
        255,
      ),
      photo(
        `${P}/400kv-ohtl-basra/puller-tensioner-loc-114.webp`,
        'Puller-tensioner set up at tower location 114',
        325,
        255,
      ),
      photo(
        `${P}/400kv-ohtl-basra/crew-working-at-height.webp`,
        'Linemen working at height on a tower cross-arm',
        204,
        349,
      ),
      photo(
        `${P}/400kv-ohtl-basra/crane-line-crossing.webp`,
        'Mobile crane supporting a power line crossing',
        201,
        268,
      ),
      photo(
        `${P}/400kv-ohtl-basra/conductor-stringing.webp`,
        'Conductor stringing machine in front of a 400kV tower',
        201,
        268,
      ),
      photo(
        `${P}/400kv-ohtl-basra/conductor-compression.webp`,
        'Hydraulic press used for conductor compression joints',
        201,
        268,
      ),
      photo(
        `${P}/400kv-ohtl-basra/conductor-joint.webp`,
        'Close-up of a conductor compression joint',
        201,
        268,
      ),
      photo(
        `${P}/400kv-ohtl-basra/tensioner-controls.webp`,
        'Control panel of the stringing tensioner',
        322,
        255,
      ),
      photo(
        `${P}/400kv-ohtl-basra/line-layout-crew.webp`,
        'Crew laying out materials along the transmission corridor',
        322,
        198,
      ),
      photo(
        `${P}/400kv-ohtl-basra/tensioner-at-tower.webp`,
        'Tensioner positioned at the base of a tower',
        311,
        198,
      ),
    ],
    todo: 'Site photos are labelled "GCCIA 400KV D/C OHTL Interconnecting Lot-5 Iraq". Confirm whether the project name, main contractor/client and our role can be published.',
  },
  {
    slug: 'cpf-60m-it-tower',
    title: '60m IT Tower at CPF',
    category: 'telecom',
    location: 'Central Processing Facility (CPF), Block 9, Basra',
    client: 'Kuwait Energy Basra Ltd.',
    period: 'Sep 2022 – Apr 2023',
    status: 'completed',
    featured: true,
    summary:
      'Design and installation of a 60-metre IT tower at the CPF, with fiber connection to the camp server room, standby power and CCTV.',
    scope: [
      'Tower design, excavation, compaction and concrete foundation',
      'Tower installation',
      'Fiber cable laying and splicing between the CPF tower and the camp server room',
      '50 kVA generator with power cabling',
      'IT room and CCTV camera installation',
    ],
    cover: photo(
      `${P}/cpf-60m-it-tower/tower-base-trench.webp`,
      'Tower base and cable trench at the CPF site',
      516,
      302,
    ),
    gallery: [
      photo(
        `${P}/cpf-60m-it-tower/foundation-excavation.webp`,
        'Excavation for tower foundations near the CPF flare',
        516,
        302,
      ),
      photo(
        `${P}/cpf-60m-it-tower/footing-rebar.webp`,
        'Reinforcement for tower footings',
        516,
        302,
      ),
      photo(
        `${P}/cpf-60m-it-tower/foundation-blocks.webp`,
        'Waterproofed concrete foundation blocks',
        516,
        302,
      ),
      photo(
        `${P}/cpf-60m-it-tower/aircraft-warning-light-box.webp`,
        'Aircraft warning light control box mounted on the tower',
        468,
        583,
      ),
    ],
    todo: 'Details from the Kuwait Energy acceptance certificate (contract BLK9-IRQ-IT-CON-0694). Confirm the photos belong to this project.',
  },
  {
    slug: 'zain-telecom-towers',
    title: 'Telecom Tower Fuel Supply & Maintenance',
    category: 'telecom',
    location: 'Iraq',
    client: 'Atheer Telecommunications Iraq (ZAIN Iraq)',
    period: '2019',
    status: 'completed',
    featured: true,
    summary:
      'Joint cooperation agreement for fuel supply and maintenance services at ZAIN telecommunication tower sites.',
    scope: [
      'Fuel supply to telecom tower sites',
      'Generator operation and maintenance',
      'Site equipment and shelter maintenance',
    ],
    cover: photo(
      `${P}/zain-telecom-towers/generator-and-fuel-tank.webp`,
      'Generator and fuel tank at a telecom tower site',
      516,
      302,
    ),
    gallery: [
      photo(
        `${P}/zain-telecom-towers/tower-base-compound.webp`,
        'Tower base inside a walled telecom compound',
        516,
        301,
      ),
      photo(
        `${P}/zain-telecom-towers/generator-silent-power.webp`,
        'Silent-type generator next to a fuel tank',
        516,
        302,
      ),
      photo(
        `${P}/zain-telecom-towers/generator-installation.webp`,
        'Generator installed at a tower site',
        516,
        302,
      ),
      photo(
        `${P}/zain-telecom-towers/generator-cummins.webp`,
        'Diesel generator set at a telecom site',
        516,
        301,
      ),
      photo(
        `${P}/zain-telecom-towers/generator-shelter.webp`,
        'Shaded generator and fuel tank enclosure',
        516,
        301,
      ),
      photo(
        `${P}/zain-telecom-towers/control-panel.webp`,
        'Electrical control panel with relays and breakers',
        358,
        438,
      ),
      photo(
        `${P}/zain-telecom-towers/equipment-shelter.webp`,
        'Equipment cabinets under a steel shelter',
        468,
        583,
      ),
    ],
    todo: 'Contract ZAINIQ-I.B/FUEL-MAIN-CONT/19/13, valid 1 Jan – 31 Dec 2019. Confirm the photos belong to this contract and whether the service continued after 2019.',
  },
  {
    slug: 'basra-oil-gas-civil-works',
    title: 'Oil & Gas Civil Works and Foundations',
    category: 'oil-gas',
    location: 'Basra',
    status: 'completed',
    featured: true,
    summary:
      'Civil works for oil and gas facilities in Basra, including concrete slabs, equipment foundations, retaining walls and pipeline tie-ins.',
    scope: [
      'Site preparation and earthworks',
      'Reinforced concrete slabs and equipment foundations',
      'Reinforced concrete walls',
      'Foundation waterproofing',
      'Pipeline and valve installation',
    ],
    cover: photo(
      `${P}/basra-oil-gas-civil-works/concrete-slab.webp`,
      'Finished concrete slab at an oil field facility',
      422,
      259,
    ),
    gallery: [
      photo(
        `${P}/basra-oil-gas-civil-works/slab-near-flare.webp`,
        'Concrete slab finishing with a gas flare in the background',
        421,
        146,
      ),
      photo(
        `${P}/basra-oil-gas-civil-works/coated-foundations.webp`,
        'Waterproofed equipment foundations with anchor bolts',
        427,
        209,
      ),
      photo(
        `${P}/basra-oil-gas-civil-works/pipeline-valves.webp`,
        'Pipeline valves installed on concrete supports in a trench',
        209,
        157,
      ),
      photo(
        `${P}/basra-oil-gas-civil-works/wall-formwork.webp`,
        'Formwork and reinforcement for a concrete wall',
        266,
        333,
      ),
      photo(
        `${P}/basra-oil-gas-civil-works/wall-starter-bars.webp`,
        'Concrete wall with starter bars',
        274,
        336,
      ),
      photo(
        `${P}/basra-oil-gas-civil-works/site-building.webp`,
        'Single-storey site building',
        268,
        294,
      ),
      photo(
        `${P}/basra-oil-gas-civil-works/site-preparation.webp`,
        'Site preparation and grading',
        261,
        291,
      ),
    ],
    todo: 'Generic entry assembled from brochure photos. Confirm the client, field name, period and status, or split it into separate projects.',
  },
  {
    slug: 'al-diwaniyah-entrance-road',
    title: 'Al-Diwaniyah Entrance Road Widening & Al-Mutlaq Bridge Maintenance',
    category: 'civil',
    location: 'Al-Diwaniyah',
    client:
      'Ministry of Construction, Housing, Municipalities & Public Works – Roads & Bridges Directorate',
    period: '2022',
    status: 'completed',
    summary:
      'Widening and rehabilitation of 8.25 km of the Al-Diwaniyah entrance road, together with maintenance of the Al-Mutlaq bridge.',
    scope: [
      'Widening and rehabilitation of 8.25 km of road',
      'Maintenance of the Al-Mutlaq bridge',
      'Works to Ministry specifications and the contract bill of quantities',
    ],
    cover: placeholderCover(
      'al-diwaniyah-entrance-road',
      'Placeholder image for the Al-Diwaniyah entrance road project',
    ),
    gallery: [],
    todo: 'Awarded under tender 14/2021 (award letter 2022, 365-day duration). Confirm the status (completed?) and add project photos.',
  },
  {
    slug: 'kuwait-energy-caravans',
    title: 'Accommodation Caravans Supply',
    category: 'civil',
    location: 'Basra',
    client: 'Kuwait Energy Basra Ltd.',
    period: '2021',
    status: 'completed',
    summary:
      'Supply of accommodation caravans for the BOC train under a purchase order from Kuwait Energy Basra.',
    scope: ['Supply of accommodation caravans', 'Delivery to site'],
    cover: placeholderCover(
      'kuwait-energy-caravans',
      'Placeholder image for the accommodation caravans project',
    ),
    gallery: [],
    todo: 'Purchase order BLK/IRQ-OP-PO-0508, effective 2 Oct 2021. Confirm the category (currently "Civil") and status, and add photos.',
  },
  {
    slug: 'halfaya-geotechnical-investigations',
    title: 'Geotechnical Investigations – Halfaya Oilfield',
    category: 'oil-gas',
    location: 'Halfaya, Maysan',
    client: 'China Petroleum Engineering Co. Ltd (subcontract via Eshraqat Al Iraq Company)',
    status: 'completed',
    summary:
      'Geotechnical investigation for buildings, stations, pipelines, overhead lines and roads at the Halfaya oilfield.',
    scope: [
      'Preliminary geotechnical investigation of the oilfield',
      'Investigation for buildings and stations',
      'Investigation for pipeline, OHTL and road routes',
      'Topographic survey',
    ],
    cover: photo(
      `${P}/halfaya-geotechnical-investigations/drilling-rig.webp`,
      'Truck-mounted drilling rig for geotechnical boreholes',
      516,
      301,
    ),
    gallery: [
      photo(
        `${P}/halfaya-geotechnical-investigations/survey.webp`,
        'Surveyor with a total station on site',
        516,
        302,
      ),
    ],
    todo: 'From the "Projects of subcontract with Eshraqat Al Iraq Company" table (items 7–16). Confirm the period, status and that the photos belong to this work.',
  },
  {
    slug: 'basra-intermediate-stations',
    title: 'Intermediate Stations – Basra Municipality',
    category: 'civil',
    location: 'Basra',
    client: 'Basra Governorate – Basra Municipality Directorate',
    period: '2019 – 2020',
    status: 'completed',
    summary:
      'Construction of two intermediate stations at various locations within the Basra municipality boundaries.',
    scope: ['Construction of two intermediate stations', 'Site handover and preliminary works'],
    cover: placeholderCover(
      'basra-intermediate-stations',
      'Placeholder image for the Basra intermediate stations project',
    ),
    gallery: [],
    todo: 'From Basra Governorate letters (tender 34/Municipality/2019). Confirm the scope and status and add photos.',
  },
  {
    slug: 'solar-pv-kalpataru',
    title: 'Solar PV Power Plant',
    category: 'solar',
    location: 'Iraq',
    client: 'Experience alongside Kalpataru',
    status: 'ongoing',
    summary: 'Construction support on a solar PV power plant. TODO: confirm details.',
    scope: ['TODO: confirm scope'],
    cover: placeholderCover('solar-pv-kalpataru', 'Placeholder image for the solar PV project'),
    gallery: [],
    todo: 'Placeholder. Provide the project name, location, capacity, scope, period, status and photos.',
  },
  {
    slug: 'oil-gas-bp',
    title: 'Oil & Gas Works',
    category: 'oil-gas',
    location: 'Basra',
    client: 'Experience alongside BP',
    status: 'ongoing',
    summary: 'Oil and gas works alongside BP. TODO: confirm details.',
    scope: ['TODO: confirm scope'],
    cover: placeholderCover('oil-gas-bp', 'Placeholder image for oil and gas works with BP'),
    gallery: [],
    todo: 'Placeholder. Provide the project name, field, scope, period, status and photos.',
  },
  {
    slug: 'oil-gas-eni',
    title: 'Oil & Gas Works',
    category: 'oil-gas',
    location: 'Basra',
    client: 'Experience alongside Eni',
    status: 'ongoing',
    summary: 'Oil and gas works alongside Eni. TODO: confirm details.',
    scope: ['TODO: confirm scope'],
    cover: placeholderCover('oil-gas-eni', 'Placeholder image for oil and gas works with Eni'),
    gallery: [],
    todo: 'Placeholder. Provide the project name, field, scope, period, status and photos.',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const featuredProjects = projects.filter((p) => p.featured)

/**
 * "Projects of Subcontract with Eshraqat Al Iraq Company" table from the brochure.
 * TODO: confirm this list can be published and how our role should be described.
 */
export const projectReferencesTitle = 'Subcontract project references'
export const projectReferencesNote =
  'Projects carried out as a subcontractor with Eshraqat Al Iraq Company.'

export const projectReferences: ProjectReference[] = [
  {
    no: 1,
    name: 'Supply & lay a sewage pipeline in Hay Al-Falahiyah',
    place: 'Basra',
    client: 'ICRC',
  },
  {
    no: 2,
    name: 'Improvement of the drinking water at Abdulla Abu Najim',
    place: 'Basra',
    client: 'ICRC',
  },
  {
    no: 3,
    name: 'Supply, installation and operation of a water complex with network in Abu Kubra (Al Maymona)',
    place: 'Maysan',
    client: 'Water Directorate of Missan',
  },
  {
    no: 4,
    name: 'Rehabilitation of a primary health care centre',
    place: 'Al Najaf',
    client: 'ICRC',
  },
  {
    no: 5,
    name: 'Supply and delivery of consumables, tools and fittings for PCIHBV',
    place: 'Basra',
    client: 'Petronas',
  },
  {
    no: 6,
    name: 'First phase work for DPABI',
    place: 'Basra',
    client: 'Daqing Petroleum Administrative Bureau Iraq Branch',
  },
  {
    no: 7,
    name: 'Preliminary geotechnical investigation of Halfaya oilfield',
    place: 'Halfaya',
    client: 'China Petroleum Engineering Co. Ltd',
  },
  {
    no: 8,
    name: 'Geotechnical investigation and topographic survey of Habbaniyah airport',
    place: 'Halfaya',
    client: 'SWP1 Expansion',
  },
  {
    no: 9,
    name: 'Geotechnical investigation for buildings and stations (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'ISF & Check Point',
  },
  {
    no: 10,
    name: 'Geotechnical investigation for buildings and stations (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'Bridge',
  },
  {
    no: 11,
    name: 'Geotechnical investigation for buildings and stations (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'GPP',
  },
  {
    no: 12,
    name: 'Geotechnical investigation for buildings and stations (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'Water Intake Area of SWP1 Expansion',
  },
  {
    no: 13,
    name: 'Geotechnical investigation for buildings and stations (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'Central Waste Facility',
  },
  {
    no: 14,
    name: 'Geotechnical investigation for buildings and stations (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'Overhead Transmission Line from CPF2 to CPF3',
  },
  {
    no: 15,
    name: 'Geotechnical investigation for pipeline, OHTL and roads (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'Coasls',
  },
  {
    no: 16,
    name: 'Geotechnical investigation for pipeline, OHTL and roads (China Petroleum Engineering Co. Ltd supervision)',
    place: 'Halfaya',
    client: 'Main Road',
  },
  {
    no: 17,
    name: 'Piling preparation and road works for Basra Power Station',
    place: 'Basra',
    client: '–',
  },
  {
    no: 18,
    name: 'Rotary bored concrete piles inside CPF, West Qurna-2 field (WQ2)',
    place: 'West Qurna-2',
    client: 'LUKOIL Mid-East Ltd.',
  },
  {
    no: 19,
    name: 'Concrete piles, steel piles and sheet-pile soil retaining works in Shatt Al-Arab for the Al-Gharraf oil field water intake',
    place: 'Basra',
    client: 'Kuwait Energy Oil & Gas',
  },
  {
    no: 20,
    name: 'Construction of two intermediate stations at various locations within Basra Governorate',
    place: 'Basra',
    client: '–',
  },
  {
    no: 21,
    name: 'Construction of two intermediate stations at various locations within Basra Governorate',
    place: 'Basra',
    client: '–',
  },
  {
    no: 22,
    name: 'Widening and rehabilitation of the Al-Diwaniyah entrance road (8.25 km) and maintenance of Al-Mutlaq bridge',
    place: 'Al-Diwaniyah',
    client: 'Ministry of Construction and Housing',
  },
]
