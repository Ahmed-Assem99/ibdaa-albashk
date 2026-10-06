import { Link } from 'react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Img } from '@/components/ui/Img'
import { categoryLabels } from '@/data/services'
import { ui } from '@/data/ui'
import { cn } from '@/lib/cn'
import type { Project } from '@/types/content'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden border border-charcoal-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
        <Img
          image={project.cover}
          className="size-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap justify-between gap-2 p-3">
          <Badge tone="dark">{categoryLabels[project.category]}</Badge>
          <Badge tone={project.status === 'ongoing' ? 'gold' : 'light'}>
            {ui.status[project.status]}
          </Badge>
        </div>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg leading-snug font-semibold text-charcoal-900">
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex items-start gap-1.5 text-sm text-charcoal-600">
          <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-700" />
          {project.location}
        </p>
        {project.client && <p className="mt-1 text-sm text-charcoal-600">{project.client}</p>}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-charcoal-700">
          {project.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold tracking-widest text-gold-700 uppercase">
          {ui.viewProject}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
          />
        </span>
      </div>
    </article>
  )
}
