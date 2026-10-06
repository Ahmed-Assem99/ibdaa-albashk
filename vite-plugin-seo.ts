import type { HtmlTagDescriptor, Plugin } from 'vite'
import { company } from './src/data/company'
import { projects } from './src/data/projects'

const staticRoutes = ['/', '/projects', '/about', '/contact']

function absolute(path: string): string {
  return new URL(path, company.siteUrl).toString()
}

function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: company.name,
    legalName: company.legalName,
    alternateName: company.legalNameAr,
    slogan: company.tagline,
    description: company.description,
    url: absolute('/'),
    logo: absolute('/images/brand/logo-512.png'),
    image: absolute(company.ogImage),
    telephone: company.phone.href.replace('tel:', ''),
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.lines[0],
      addressLocality: company.address.locality,
      addressCountry: company.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Iraq' },
  }
}

/**
 * Injects Open Graph / Twitter defaults and Organization JSON-LD into index.html,
 * and emits sitemap.xml and robots.txt at build time. Everything is derived from
 * src/data/company.ts and src/data/projects.ts.
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
        meta({ property: 'og:site_name', content: company.name }),
        meta({ property: 'og:locale', content: 'en_US' }),
        meta({ property: 'og:title', content: company.legalName }),
        meta({ property: 'og:description', content: company.description }),
        meta({ property: 'og:url', content: absolute('/') }),
        meta({ property: 'og:image', content: absolute(company.ogImage) }),
        meta({ property: 'og:image:width', content: '1200' }),
        meta({ property: 'og:image:height', content: '630' }),
        meta({ name: 'twitter:card', content: 'summary_large_image' }),
        meta({ name: 'twitter:title', content: company.legalName }),
        meta({ name: 'twitter:description', content: company.description }),
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
      const today = new Date().toISOString().slice(0, 10)
      const routes = [...staticRoutes, ...projects.map((p) => `/projects/${p.slug}`)]
      const urls = routes
        .map((r) => `  <url><loc>${absolute(r)}</loc><lastmod>${today}</lastmod></url>`)
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`,
      })
    },
  }
}
