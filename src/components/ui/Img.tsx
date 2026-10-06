import type { ComponentPropsWithoutRef } from 'react'
import type { ImageAsset } from '@/types/content'

type ImgProps = {
  image: ImageAsset
  /** Load eagerly with high priority (use for the LCP image only). */
  priority?: boolean
} & Omit<ComponentPropsWithoutRef<'img'>, 'src' | 'width' | 'height'>

/** Image with intrinsic size (prevents layout shift) and lazy loading by default. */
export function Img({ image, priority = false, ...props }: ImgProps) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  )
}
