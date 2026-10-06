import { useLayoutEffect, type ReactNode } from 'react'
import { content } from '@/content'
import { localeMeta, type Locale } from './config'
import { LocaleContext } from './context'

/** Provides the active language and its content, and keeps <html lang/dir> in sync. */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { dir } = localeMeta[locale]

  useLayoutEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir])

  return <LocaleContext value={{ locale, dir, t: content[locale] }}>{children}</LocaleContext>
}
