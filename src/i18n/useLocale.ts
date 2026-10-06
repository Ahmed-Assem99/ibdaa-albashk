import { use } from 'react'
import type { SiteContent } from '@/content'
import { LocaleContext, type LocaleContextValue } from './context'

/** The active language, its text direction and its content. */
export function useLocale(): LocaleContextValue {
  const value = use(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside <LocaleProvider>')
  return value
}

/** Shorthand for the active language's content. */
export function useContent(): SiteContent {
  return useLocale().t
}
