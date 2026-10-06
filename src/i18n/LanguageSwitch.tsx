import { Link as RouterLink, useLocation } from 'react-router'
import { Languages } from 'lucide-react'
import { cn } from '@/lib/cn'
import { localeMeta, localizePath, parsePath, type Locale } from './config'
import { useLocale } from './useLocale'

/** Link to the current page in the other language (EN ⇄ AR). */
export function LanguageSwitch({ className }: { className?: string }) {
  const { locale } = useLocale()
  const { pathname, search, hash } = useLocation()
  const target: Locale = locale === 'en' ? 'ar' : 'en'
  const to = localizePath(parsePath(pathname).path, target) + search + hash

  return (
    <RouterLink
      to={to}
      lang={target}
      hrefLang={target}
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-gold-300',
        className,
      )}
    >
      <Languages aria-hidden="true" className="size-4 text-gold-300" />
      {localeMeta[target].nativeName}
    </RouterLink>
  )
}
