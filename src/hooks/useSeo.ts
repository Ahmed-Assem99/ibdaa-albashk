import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { company } from '@/data/company'
import type { PageMeta } from '@/types/content'

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setMeta(key: 'name' | 'property', name: string, content: string) {
  setTag(
    `meta[${key}="${name}"]`,
    () => {
      const meta = document.createElement('meta')
      meta.setAttribute(key, name)
      return meta
    },
    'content',
    content,
  )
}

/**
 * Sets the document title, meta description, canonical URL and Open Graph / Twitter
 * tags for the current page. Defaults are injected into index.html at build time.
 */
export function useSeo({ title, description, image }: PageMeta & { image?: string }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = `${title} | ${company.name}`
    const url = new URL(pathname, company.siteUrl).toString()
    const imageUrl = new URL(image ?? company.ogImage, company.siteUrl).toString()

    document.title = fullTitle
    setMeta('name', 'description', description)
    setTag(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement('link')
        link.rel = 'canonical'
        return link
      },
      'href',
      url,
    )
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)
  }, [title, description, image, pathname])
}
