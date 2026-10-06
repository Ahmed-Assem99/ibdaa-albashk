/** Supported languages. English lives at /…, Arabic at /ar/…. */
export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

interface LocaleMeta {
  /** URL prefix ('' for the default locale). */
  prefix: string
  dir: 'ltr' | 'rtl'
  /** Name of the language in that language (shown in the switcher). */
  nativeName: string
  /** Open Graph locale. */
  ogLocale: string
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { prefix: '', dir: 'ltr', nativeName: 'English', ogLocale: 'en_US' },
  ar: { prefix: '/ar', dir: 'rtl', nativeName: 'العربية', ogLocale: 'ar_IQ' },
}

/** Splits a pathname into its locale and the locale-independent path ('/ar/about' → ar + '/about'). */
export function parsePath(pathname: string): { locale: Locale; path: string } {
  for (const locale of locales) {
    const { prefix } = localeMeta[locale]
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
      return { locale, path: pathname.slice(prefix.length) || '/' }
    }
  }
  return { locale: defaultLocale, path: pathname || '/' }
}

/** Prefixes an internal, locale-independent path ('/about#hse') for a locale. */
export function localizePath(path: string, locale: Locale): string {
  const { prefix } = localeMeta[locale]
  if (!prefix || !path.startsWith('/')) return path
  if (path === '/') return prefix
  if (/^\/[?#]/.test(path)) return prefix + path.slice(1)
  return prefix + path
}
