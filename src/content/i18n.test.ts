import { describe, expect, it } from 'vitest'
import { localizePath, parsePath } from '@/i18n/config'
import { content } from '.'
import { imageAlts } from './ar/image-alts'
import { collectImages } from './localize-images'

const { en, ar } = content

/** Paths whose structure may legitimately differ between languages. */
const freeShape = new Set(['$.home.hero.title'])

/** Describes the shape of a value: object keys, array lengths and leaf types. */
function shape(value: unknown, path = '$', out: string[] = []): string[] {
  if (freeShape.has(path)) {
    out.push(`${path}:free`)
  } else if (Array.isArray(value)) {
    out.push(`${path}[${value.length}]`)
    value.forEach((item, i) => shape(item, `${path}[${i}]`, out))
  } else if (typeof value === 'object' && value !== null) {
    for (const key of Object.keys(value).sort()) {
      shape((value as Record<string, unknown>)[key], `${path}.${key}`, out)
    }
  } else if (value !== undefined) {
    out.push(`${path}:${typeof value}`)
  }
  return out
}

/** All string leaves with their paths, skipping internal notes and non-text fields. */
function strings(value: unknown, path = '$', out: [string, string][] = []): [string, string][] {
  if (Array.isArray(value)) value.forEach((item, i) => strings(item, `${path}[${i}]`, out))
  else if (typeof value === 'object' && value !== null) {
    for (const [key, item] of Object.entries(value)) {
      if (['todo', 'src', 'to', 'slug', 'file', 'category', 'status', 'icon', 'id'].includes(key))
        continue
      strings(item, `${path}.${key}`, out)
    }
  } else if (typeof value === 'string') out.push([path, value])
  return out
}

describe('locale paths', () => {
  it('prefixes Arabic paths and leaves English ones alone', () => {
    expect(localizePath('/', 'en')).toBe('/')
    expect(localizePath('/', 'ar')).toBe('/ar')
    expect(localizePath('/about#hse', 'ar')).toBe('/ar/about#hse')
    expect(localizePath('/projects?category=solar', 'ar')).toBe('/ar/projects?category=solar')
  })

  it('parses the locale from a pathname', () => {
    expect(parsePath('/')).toEqual({ locale: 'en', path: '/' })
    expect(parsePath('/ar')).toEqual({ locale: 'ar', path: '/' })
    expect(parsePath('/ar/projects/x')).toEqual({ locale: 'ar', path: '/projects/x' })
    expect(parsePath('/arabic')).toEqual({ locale: 'en', path: '/arabic' })
  })
})

describe('Arabic content', () => {
  it('has exactly the same structure as English', () => {
    expect(shape(ar)).toEqual(shape(en))
  })

  it('keeps projects, images and statuses aligned with English', () => {
    expect(ar.projects.map((p) => [p.slug, p.category, p.status, p.cover.src])).toEqual(
      en.projects.map((p) => [p.slug, p.category, p.status, p.cover.src]),
    )
  })

  it('translates the alt text of every image', () => {
    const missing = collectImages(en)
      .map((img) => img.src)
      .filter((src) => !imageAlts[src])
    expect([...new Set(missing)]).toEqual([])
  })

  it('has no untranslated English sentences', () => {
    // Three or more consecutive Latin words suggest English text was left in.
    const english = strings(ar).filter(([, text]) =>
      /[A-Za-z]{2,}(?:[\s,]+[A-Za-z]{2,}){2,}/.test(text),
    )
    expect(english).toEqual([])
  })

  it('translates every text that differs between languages', () => {
    const enStrings = new Map(strings(en))
    const same = strings(ar).filter(
      ([path, text]) => enStrings.get(path) === text && /[A-Za-z]{4,}/.test(text),
    )
    // Brand names and codes are intentionally identical.
    const allowed = /^(?:Kalpataru|BP|Eni|ZAIN|Kuwait Energy|GPP|Coasls|QHSE|404)$/
    expect(same.filter(([, text]) => !allowed.test(text))).toEqual([])
  })
})
