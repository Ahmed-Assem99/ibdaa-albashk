import { createContext } from 'react'
import type { SiteContent } from '@/content'
import type { Locale } from './config'

export interface LocaleContextValue {
  locale: Locale
  dir: 'ltr' | 'rtl'
  t: SiteContent
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
