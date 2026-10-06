import { useParams } from 'react-router'
import { ArrowLeft, Check } from 'lucide-react'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { CtaBand } from '@/components/sections/CtaBand'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GalleryGrid } from '@/components/ui/GalleryGrid'
import { Img } from '@/components/ui/Img'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useContent } from '@/i18n/useLocale'
import { useSeo } from '@/hooks/useSeo'
import type { Project } from '@/types/content'
import { NotFoundPage } from './NotFoundPage'

export function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const project = useContent().projects.find((p) => p.slug === slug)
  if (!project) return <NotFoundPage />
  return <ProjectDetail project={project} />
}

function ProjectDetail({ project }: { project: Project }) {
  const { ui, projects, categoryLabels } = useContent()
  useSeo({ title: project.title, description: project.summary, image: project.cover.src })

  const photos = [project.cover, ...project.gallery].filter((image) => !image.placeholder)
  const sameCategory = projects.filter(
    (p) => p.category === project.category && p.slug !== project.slug,
  )
  const related = (
    sameCategory.length ? sameCategory : projects.filter((p) => p.slug !== project.slug)
  ).slice(0, 3)

  const meta: { label: string; value?: string }[] = [
    { label: ui.projectMeta.category, value: categoryLabels[project.category] },
    { label: ui.projectMeta.location, value: project.location },
    { label: ui.projectMeta.client, value: project.client },
    { label: ui.projectMeta.period, value: project.period },
    { label: ui.projectMeta.status, value: ui.status[project.status] },
  ]

  return (
    <>
      <PageHeader
        title={project.title}
        intro={project.summary}
        breadcrumbs={[{ label: ui.pages.projects, to: '/projects' }, { label: project.title }]}
      >
        <div className="mt-6 flex flex-wrap gap-2 ps-6">
          <Badge tone="gold">{ui.status[project.status]}</Badge>
          <Badge tone="dark">{categoryLabels[project.category]}</Badge>
        </div>
      </PageHeader>

      <section aria-labelledby="scope-title" className="bg-white pb-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Img
              image={project.cover}
              priority
              className="aspect-[16/10] w-full bg-charcoal-100 object-cover"
            />
            <h2
              id="scope-title"
              className="mt-12 text-2xl font-light tracking-wide text-charcoal-900 uppercase"
            >
              {ui.projectMeta.scope}
            </h2>
            <div aria-hidden="true" className="mt-3 h-px w-24 bg-gold-gradient" />
            <ul className="mt-6 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="flex gap-3 text-charcoal-700">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:pt-0">
            <dl className="divide-y divide-white/10 border-t-4 border-gold-500 surface-dark p-6 lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
              {meta
                .filter((item) => item.value)
                .map((item) => (
                  <div key={item.label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-white">{item.value}</dd>
                  </div>
                ))}
            </dl>
            <Button
              to="/projects"
              variant="outline-dark"
              className="mt-6 w-full"
              icon={<ArrowLeft className="size-4" />}
            >
              {ui.backToProjects}
            </Button>
          </aside>
        </Container>
      </section>

      {photos.length > 1 && (
        <section aria-labelledby="project-gallery-title" className="bg-charcoal-50 py-20">
          <Container>
            <SectionHeading id="project-gallery-title" title={ui.projectMeta.gallery} />
            <GalleryGrid images={photos} className="mt-10" />
          </Container>
        </section>
      )}

      <section aria-labelledby="related-title" className="bg-white py-20">
        <Container>
          <SectionHeading id="related-title" title={ui.projectMeta.related} />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
