import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  type LinkProps,
  type NavLinkProps,
  type To,
} from 'react-router'
import { localizePath, type Locale } from './config'
import { useLocale } from './useLocale'

function localizeTo(to: To, locale: Locale): To {
  if (typeof to === 'string') return localizePath(to, locale)
  return to.pathname ? { ...to, pathname: localizePath(to.pathname, locale) } : to
}

/** Router Link that adds the current language prefix to internal paths ('/about' → '/ar/about'). */
export function Link({ to, ...props }: LinkProps) {
  const { locale } = useLocale()
  return <RouterLink to={localizeTo(to, locale)} {...props} />
}

/** Router NavLink with the same language-aware paths. */
export function NavLink({ to, ...props }: NavLinkProps) {
  const { locale } = useLocale()
  return <RouterNavLink to={localizeTo(to, locale)} {...props} />
}
