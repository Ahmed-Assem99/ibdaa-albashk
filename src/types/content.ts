/** Shared content types. All site copy lives in `src/data/*` and is typed against these. */

export interface ImageAsset {
  /** Path under /public, e.g. `/images/projects/foo/cover.webp`. */
  src: string
  alt: string
  width: number
  height: number
  /** True for generated placeholder artwork that should be replaced with a real photo. */
  placeholder?: boolean
}

export const serviceCategories = ['transmission', 'solar', 'oil-gas', 'telecom', 'civil'] as const
export type ServiceCategory = (typeof serviceCategories)[number]

export interface Service {
  id: ServiceCategory
  title: string
  summary: string
  points: string[]
  image: ImageAsset
}

export type CapabilityIcon = 'building' | 'earthworks' | 'fleet' | 'logistics'

export interface Capability {
  icon: CapabilityIcon
  title: string
  description: string
}

export type ProjectStatus = 'completed' | 'ongoing'

export interface Project {
  slug: string
  title: string
  category: ServiceCategory
  location: string
  /** Client or partner, worded neutrally. */
  client?: string
  period?: string
  status: ProjectStatus
  summary: string
  scope: string[]
  cover: ImageAsset
  gallery: ImageAsset[]
  featured?: boolean
  /** Internal note for content owners. Never rendered. */
  todo?: string
}

export interface ProjectReference {
  no: number
  name: string
  place: string
  client: string
}

export interface Partner {
  name: string
  sector: string
  /**
   * Official logo, e.g. `{ src: '/images/partners/bp.svg', alt: 'BP', width: 120, height: 48 }`.
   * Without one, the name is shown as a styled wordmark.
   */
  logo?: ImageAsset
}

export interface Stat {
  value: string
  label: string
  /** Internal note for content owners. Never rendered. */
  todo?: string
}

export interface Value {
  title: string
  description: string
}

export interface OrgUnit {
  title: string
  roles: string[]
}

export interface CompanyDocument {
  title: string
  issuer: string
  description: string
  /** Path under /public/docs. Leave undefined to show "Available on request". */
  file?: string
}

export interface CompanyText {
  name: string
  logo: { first: string; second: string; subtitle: string }
  tagline: string
  description: string
  addressLines: string[]
  workingHours: string
}

/** A photo in the hero's angled frames, captioned with its business line. */
export interface HeroPanel {
  category: ServiceCategory
  image: ImageAsset
}

/** One line of the hero title; segments with `accent` render in gold. */
export type HeroTitleLine = { text: string; accent?: boolean }[]

export interface NavItem {
  label: string
  to: string
}

export interface PageMeta {
  title: string
  description: string
}
