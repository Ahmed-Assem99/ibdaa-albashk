import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useContent } from '@/i18n/useLocale'
import type { ImageAsset } from '@/types/content'

interface LightboxProps {
  images: ImageAsset[]
  /** Index of the open image, or null when closed. */
  index: number | null
  onChange: (index: number | null) => void
}

/** Accessible image viewer built on the native <dialog> element (focus trap and Esc for free). */
export function Lightbox({ images, index, onChange }: LightboxProps) {
  const { ui } = useContent()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const image = index === null ? undefined : images[index]
  const count = images.length

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
  }, [index])

  const step = useCallback(
    (delta: number) => {
      if (index === null) return
      onChange((index + delta + count) % count)
    },
    [index, count, onChange],
  )

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click and arrow keys are conveniences on the native dialog, which also handles Esc
    <dialog
      ref={dialogRef}
      aria-label={image?.alt}
      onClose={() => {
        onChange(null)
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onChange(null)
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(document.dir === 'rtl' ? -1 : 1)
        if (e.key === 'ArrowLeft') step(document.dir === 'rtl' ? 1 : -1)
      }}
      className="m-auto max-h-none max-w-none surface-dark bg-transparent p-0 backdrop:bg-charcoal-950/90 backdrop:backdrop-blur-sm"
    >
      {image && index !== null && (
        <figure className="flex max-h-[90dvh] w-[min(92vw,64rem)] flex-col items-center gap-3">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="max-h-[78dvh] w-auto max-w-full object-contain shadow-2xl"
          />
          <figcaption className="flex w-full items-center justify-between gap-4 text-sm text-charcoal-200">
            <span>{image.alt}</span>
            <span className="shrink-0 text-gold-300">{ui.lightbox.counter(index + 1, count)}</span>
          </figcaption>
        </figure>
      )}
      <button
        type="button"
        onClick={() => {
          onChange(null)
        }}
        className="fixed end-4 top-4 grid size-11 place-items-center bg-charcoal-900/80 text-white hover:text-gold-300"
      >
        <X aria-hidden="true" className="size-6" />
        <span className="sr-only">{ui.lightbox.close}</span>
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => {
              step(-1)
            }}
            className="fixed start-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center bg-charcoal-900/80 text-white hover:text-gold-300 sm:start-4"
          >
            <ChevronLeft aria-hidden="true" className="size-6 rtl:-scale-x-100" />
            <span className="sr-only">{ui.lightbox.previous}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              step(1)
            }}
            className="fixed end-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center bg-charcoal-900/80 text-white hover:text-gold-300 sm:end-4"
          >
            <ChevronRight aria-hidden="true" className="size-6 rtl:-scale-x-100" />
            <span className="sr-only">{ui.lightbox.next}</span>
          </button>
        </>
      )}
    </dialog>
  )
}
