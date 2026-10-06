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

export type ServiceCategory = 'transmission' | 'solar' | 'oil-gas' | 'telecom' | 'civil'

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

export interface PageMeta {
  title: string
  description: string
}
