import type { HtmlTagDescriptor, Plugin } from 'vite'
import { companyText as arCompany } from './src/content/ar/company'
import { companyText } from './src/content/en/company'
import { projects } from './src/content/en/projects'
import { company } from './src/data/company'
import { defaultLocale, locales, localizePath } from './src/i18n/config'

const staticRoutes = ['/', '/projects', '/about', '/contact']

function absolute(path: string): string {
  return new URL(path, company.siteUrl).toString()
}

function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: companyText.name,
    legalName: company.legalName,
    alternateName: [arCompany.name, company.legalNameAr],
    slogan: companyText.tagline,
    description: companyText.description,
    url: absolute('/'),
    logo: absolute('/images/brand/logo-512.png'),
    image: absolute(company.ogImage),
    telephone: company.phone.href.replace('tel:', ''),
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyText.addressLines[0],
      addressLocality: company.address.locality,
      addressCountry: company.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Iraq' },
    knowsLanguage: ['en', 'ar'],
  }
}

function sitemap(): string {
  const today = new Date().toISOString().slice(0, 10)
  const routes = [...staticRoutes, ...projects.map((p) => `/projects/${p.slug}`)]
  const entries = routes.flatMap((route) => {
    const alternates = [
      ...locales.map(
        (locale) =>
          `    <xhtml:link rel="alternate" hreflang="${locale}" href="${absolute(localizePath(route, locale))}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(localizePath(route, defaultLocale))}"/>`,
    ].join('\n')
    return locales.map(
      (locale) =>
        `  <url>\n    <loc>${absolute(localizePath(route, locale))}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`,
    )
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`
}

/**
 * Injects Open Graph / Twitter defaults and Organization JSON-LD into index.html,
 * and emits sitemap.xml (both languages, with hreflang alternates) and robots.txt
 * at build time. Everything is derived from src/data and src/content.
 */
export function seo(): Plugin {
  return {
    name: 'ibdaa-seo',
    transformIndexHtml() {
      const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({
        tag: 'meta',
        attrs,
        injectTo: 'head',
      })
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: absolute('/') }, injectTo: 'head' },
        meta({ property: 'og:type', content: 'website' }),
        meta({ property: 'og:site_name', content: companyText.name }),
        meta({ property: 'og:locale', content: 'en_US' }),
        meta({ property: 'og:locale:alternate', content: 'ar_IQ' }),
        meta({ property: 'og:title', content: company.legalName }),
        meta({ property: 'og:description', content: companyText.description }),
        meta({ property: 'og:url', content: absolute('/') }),
        meta({ property: 'og:image', content: absolute(company.ogImage) }),
        meta({ property: 'og:image:width', content: '1200' }),
        meta({ property: 'og:image:height', content: '630' }),
        meta({ name: 'twitter:card', content: 'summary_large_image' }),
        meta({ name: 'twitter:title', content: company.legalName }),
        meta({ name: 'twitter:description', content: companyText.description }),
        meta({ name: 'twitter:image', content: absolute(company.ogImage) }),
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(organizationJsonLd()),
          injectTo: 'head',
        },
      ]
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`,
      })
    },
  }
}
