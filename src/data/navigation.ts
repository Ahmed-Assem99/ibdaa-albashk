export interface NavItem {
  label: string
  to: string
}

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
