import type { Locale } from '@/i18n/config'
import { ar } from './ar'
import { en, type SiteContent } from './en'

export type { SiteContent }

/** All site content, by language. */
export const content: Record<Locale, SiteContent> = { en, ar }
