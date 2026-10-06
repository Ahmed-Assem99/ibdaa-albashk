import type { ImageAsset } from '../types/content'

function isImage(value: unknown): value is ImageAsset {
  return (
    typeof value === 'object' &&
    value !== null &&
    'src' in value &&
    'alt' in value &&
    typeof (value as ImageAsset).src === 'string'
  )
}

/**
 * Returns a deep copy of `value` in which every image's `alt` is replaced by the
 * translation for its `src` (empty, decorative alts are kept). Lets translated
 * bundles reuse the English image data and only supply alt text per image file.
 */
export function localizeImageAlts<T>(value: T, alts: Record<string, string>): T {
  if (Array.isArray(value)) return value.map((item: unknown) => localizeImageAlts(item, alts)) as T
  if (isImage(value)) {
    const translated = value.alt ? alts[value.src] : undefined
    return translated ? { ...value, alt: translated } : value
  }
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeImageAlts(item, alts)]),
    ) as T
  }
  return value
}

/** Collects every non-decorative image in a content tree (used by the i18n tests). */
export function collectImages(value: unknown, found: ImageAsset[] = []): ImageAsset[] {
  if (Array.isArray(value)) value.forEach((item) => collectImages(item, found))
  else if (isImage(value)) {
    if (value.alt) found.push(value)
  } else if (typeof value === 'object' && value !== null) {
    Object.values(value).forEach((item) => collectImages(item, found))
  }
  return found
}
