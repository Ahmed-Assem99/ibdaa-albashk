import { useState } from 'react'
import { Expand } from 'lucide-react'
import { ui } from '@/data/ui'
import { cn } from '@/lib/cn'
import type { ImageAsset } from '@/types/content'
import { Img } from './Img'
import { Lightbox } from './Lightbox'

interface GalleryGridProps {
  images: ImageAsset[]
  className?: string
}

/** Masonry-style photo grid; each photo opens in the lightbox. */
export function GalleryGrid({ images, className }: GalleryGridProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <ul className={cn('columns-2 gap-3 sm:columns-3 lg:columns-4 [&>li]:mb-3', className)}>
        {images.map((image, i) => (
          <li key={image.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => {
                setOpen(i)
              }}
              className="group relative block w-full overflow-hidden bg-charcoal-100"
            >
              <Img
                image={image}
                alt=""
                className="h-auto w-full transition duration-500 group-hover:scale-105 group-hover:brightness-75"
              />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand aria-hidden="true" className="size-7 text-gold-100" />
              </span>
              <span className="sr-only">
                {ui.lightbox.open}: {image.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={images} index={open} onChange={setOpen} />
    </>
  )
}
