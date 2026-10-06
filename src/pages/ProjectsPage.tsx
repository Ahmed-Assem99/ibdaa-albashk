import { useSearchParams } from 'react-router'
import { ChevronDown } from 'lucide-react'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { CtaBand } from '@/components/sections/CtaBand'
import { Container } from '@/components/ui/Container'
import { GalleryGrid } from '@/components/ui/GalleryGrid'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { gallery } from '@/data/gallery'
import { pageMeta, projectsPage } from '@/data/pages'
import {
  projectReferences,
  projectReferencesNote,
  projectReferencesTitle,
  projects,
} from '@/data/projects'
import { categoryLabels } from '@/data/services'
import { useSeo } from '@/hooks/useSeo'
import { cn } from '@/lib/cn'
import type { ServiceCategory } from '@/types/content'

const categories = Object.keys(categoryLabels) as ServiceCategory[]

function isCategory(value: string | null): value is ServiceCategory {
  return value !== null && (categories as string[]).includes(value)
}

export function ProjectsPage() {
  useSeo(pageMeta.projects)
  const [params, setParams] = useSearchParams()
  const param = params.get('category')
  const active = isCategory(param) ? param : null
  const visible = active ? projects.filter((p) => p.category === active) : projects

  const select = (category: ServiceCategory | null) => {
    setParams(category ? { category } : {}, { replace: true, preventScrollReset: true })
  }

  const filters: { value: ServiceCategory | null; label: string; count: number }[] = [
    { value: null, label: projectsPage.allLabel, count: projects.length },
    ...categories.map((c) => ({
      value: c,
      label: categoryLabels[c],
      count: projects.filter((p) => p.category === c).length,
    })),
  ]

  return (
    <>
      <PageHeader
        title={projectsPage.title}
        highlight={projectsPage.highlight}
        intro={projectsPage.intro}
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section aria-labelledby="project-list-title" className="bg-white pt-4 pb-24">
        <Container>
          <h2 id="project-list-title" className="sr-only">
            Project list
          </h2>
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => {
              const selected = filter.value === active
              return (
                <button
                  key={filter.label}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    select(filter.value)
                  }}
                  className={cn(
                    'inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition',
                    selected
                      ? 'border-transparent bg-charcoal-900 text-gold-100'
                      : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-900 hover:text-charcoal-900',
                  )}
                >
                  {filter.label}
                  <span
                    className={cn(
                      'min-w-5 px-1 text-[0.625rem]',
                      selected
                        ? 'bg-gold-gradient text-charcoal-950'
                        : 'bg-charcoal-100 text-charcoal-700',
                    )}
                  >
                    {filter.count}
                  </span>
                </button>
              )
            })}
          </div>

          <p aria-live="polite" className="sr-only">
            {visible.length} projects shown
          </p>

          {visible.length > 0 ? (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 text-charcoal-600">{projectsPage.empty}</p>
          )}

          <details className="group mt-16 border border-charcoal-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-sm font-semibold tracking-wider text-charcoal-900 uppercase">
                  {projectReferencesTitle} ({projectReferences.length})
                </span>
                <span className="mt-1 block text-sm text-charcoal-600">
                  {projectReferencesNote}
                </span>
              </span>
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 text-gold-700 transition group-open:rotate-180"
              />
            </summary>
            <div className="overflow-x-auto border-t border-charcoal-200">
              <table className="w-full min-w-[40rem] text-start text-sm">
                <thead className="bg-charcoal-900 text-xs tracking-wider text-gold-100 uppercase">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-start">
                      No.
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      Project
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      Place
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      Client
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal-100">
                  {projectReferences.map((ref) => (
                    <tr key={ref.no} className="odd:bg-charcoal-50">
                      <td className="px-4 py-3 text-charcoal-600">{ref.no}</td>
                      <td className="px-4 py-3 text-charcoal-900">{ref.name}</td>
                      <td className="px-4 py-3 text-charcoal-700">{ref.place}</td>
                      <td className="px-4 py-3 text-charcoal-700">{ref.client}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </Container>
      </section>

      <section aria-labelledby="gallery-title" className="bg-charcoal-50 py-24">
        <Container>
          <SectionHeading
            id="gallery-title"
            title={projectsPage.galleryTitle}
            highlight={projectsPage.galleryHighlight}
            intro={projectsPage.galleryIntro}
          />
          <GalleryGrid images={gallery} className="mt-12" />
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
