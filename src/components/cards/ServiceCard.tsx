import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Img } from '@/components/ui/Img'
import type { Service } from '@/types/content'

interface ServiceCardProps {
  service: Service
  ctaLabel: string
}

/** Core service with a circular photo mask, as on the brochure's "What we do" pages. */
export function ServiceCard({ service, ctaLabel }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col items-center text-center">
      <div className="relative size-44 rounded-full bg-gold-gradient p-1.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] sm:size-48">
        <div className="size-full overflow-hidden rounded-full border-4 border-charcoal-900 bg-charcoal-800">
          <Img
            image={service.image}
            className="size-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-wide text-white uppercase">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-200">{service.summary}</p>
      <Link
        to={`/projects?category=${service.id}`}
        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-300 uppercase after:absolute after:inset-0 hover:text-gold-100"
      >
        {ctaLabel}
        <span className="sr-only">: {service.title}</span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
        />
      </Link>
    </article>
  )
}
