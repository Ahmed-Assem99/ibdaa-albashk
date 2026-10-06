import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { company } from '@/data/company'
import { defaultLocale, localeMeta, locales, localizePath, parsePath } from '@/i18n/config'
import { useLocale } from '@/i18n/useLocale'
import type { PageMeta } from '@/types/content'

function upsert(selector: string, create: () => HTMLElement, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value)
}

function setMeta(key: 'name' | 'property', name: string, content: string) {
  upsert(`meta[${key}="${name}"]`, () => document.createElement('meta'), { [key]: name, content })
}

function setLink(selector: string, attrs: Record<string, string>) {
  upsert(selector, () => document.createElement('link'), attrs)
}

/**
 * Sets the document title, meta description, canonical URL, hreflang alternates and
 * Open Graph / Twitter tags for the current page and language. Defaults are injected
 * into index.html at build time (vite-plugin-seo.ts).
 */
export function useSeo({ title, description, image }: PageMeta & { image?: string }) {
  const { pathname } = useLocation()
  const { locale, t } = useLocale()

  useEffect(() => {
    const absolute = (path: string) => new URL(path, company.siteUrl).toString()
    const { path } = parsePath(pathname)
    const fullTitle = `${title} | ${t.company.name}`
    const url = absolute(localizePath(path, locale))
    const imageUrl = absolute(image ?? company.ogImage)

    document.title = fullTitle
    setMeta('name', 'description', description)
    setLink('link[rel="canonical"]', { rel: 'canonical', href: url })
    for (const alt of locales) {
      setLink(`link[rel="alternate"][hreflang="${alt}"]`, {
        rel: 'alternate',
        hreflang: alt,
        href: absolute(localizePath(path, alt)),
      })
    }
    setLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: absolute(localizePath(path, defaultLocale)),
    })
    setMeta('property', 'og:locale', localeMeta[locale].ogLocale)
    setMeta('property', 'og:site_name', t.company.name)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)
  }, [title, description, image, pathname, locale, t])
}
