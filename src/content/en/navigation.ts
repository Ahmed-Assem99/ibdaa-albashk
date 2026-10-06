import type { NavItem } from '../../types/content'

/** Main menu. Paths are locale-independent; links add the /ar prefix automatically. */
export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
