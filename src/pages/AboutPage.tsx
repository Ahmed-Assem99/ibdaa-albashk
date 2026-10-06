import { Check, Download, FileText, Lock } from 'lucide-react'
import logoUrl from '@/assets/logo.svg'
import { CtaBand } from '@/components/sections/CtaBand'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Img } from '@/components/ui/Img'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { company } from '@/data/company'
import { useContent } from '@/i18n/useLocale'
import { useSeo } from '@/hooks/useSeo'
import { cn } from '@/lib/cn'

function CheckList({
  items,
  tone = 'light',
}: {
  items: readonly string[]
  tone?: 'light' | 'dark'
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={cn('flex gap-3', tone === 'dark' ? 'text-charcoal-200' : 'text-charcoal-700')}
        >
          <Check
            aria-hidden="true"
            className={cn(
              'mt-0.5 size-5 shrink-0',
              tone === 'dark' ? 'text-gold-300' : 'text-gold-700',
            )}
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function AboutPage() {
  const { ui, pageMeta, pages, about, documents, company: text } = useContent()
  const aboutPage = pages.about
  const { story, vision, mission, valuesIntro, values, capabilitiesSection, hse, orgChart } = about
  const visionMission: { title: string; text: string; points?: string[] }[] = [vision, mission]
  useSeo(pageMeta.about)

  return (
    <>
      <PageHeader
        title={aboutPage.title}
        highlight={aboutPage.highlight}
        intro={aboutPage.intro}
        breadcrumbs={[{ label: ui.pages.about }]}
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="bg-white pb-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="story-title" title={story.title} highlight={story.highlight} />
            <p className="mt-8 text-xl leading-relaxed font-light text-charcoal-800">
              {story.lead}
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-charcoal-700">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={0.1}
            className="relative overflow-hidden surface-dark px-8 pt-10 pb-14 text-center"
          >
            <div
              aria-hidden="true"
              className="absolute -end-12 -bottom-12 size-24 rotate-45 bg-gold-gradient opacity-90"
            />
            <img
              src={logoUrl}
              alt=""
              width={160}
              height={160}
              className="relative mx-auto size-40"
            />
            <p
              lang="en"
              dir="ltr"
              className="relative mt-6 text-sm font-semibold tracking-[0.2em] text-white uppercase"
            >
              {company.legalName}
            </p>
            <p lang="ar" dir="rtl" className="relative mt-3 text-sm leading-relaxed text-gold-100">
              {company.legalNameAr}
            </p>
            <p className="relative mt-6 text-xs tracking-[0.24em] text-gold-300 uppercase">
              {text.tagline}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Vision & mission */}
      <section aria-label={ui.about.visionMissionLabel} className="bg-charcoal-50 py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {visionMission.map((block, i) => (
            <Reveal
              key={block.title}
              delay={i * 0.1}
              className="h-full border-t-4 border-gold-500 bg-white p-8 shadow-sm sm:p-10"
            >
              <h2 className="text-2xl font-light tracking-wide text-charcoal-900 uppercase">
                <span className="text-gold-gradient-deep font-semibold">{block.title}</span>
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal-700">{block.text}</p>
              {block.points && (
                <div className="mt-5">
                  <CheckList items={block.points} />
                </div>
              )}
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="surface-dark py-24">
        <Container>
          <SectionHeading
            id="values-title"
            tone="dark"
            title={ui.about.valuesTitle}
            highlight={ui.about.valuesHighlight}
            intro={valuesIntro}
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => {
              const last = i === values.length - 1
              return (
                <li key={value.title}>
                  <Reveal
                    delay={i * 0.06}
                    className={cn(
                      'h-full p-6',
                      last
                        ? 'bg-gold-gradient text-charcoal-950'
                        : 'border border-white/10 bg-charcoal-800/50',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'text-3xl font-extrabold',
                        last ? 'text-charcoal-950/40' : 'text-gold-gradient',
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={cn(
                        'mt-3 text-lg font-semibold tracking-wide uppercase',
                        !last && 'text-white',
                      )}
                    >
                      {value.title}
                    </h3>
                    <p
                      className={cn(
                        'mt-3 text-sm leading-relaxed',
                        last ? 'text-charcoal-900' : 'text-charcoal-200',
                      )}
                    >
                      {value.description}
                    </p>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </Container>
      </section>

      {/* Capabilities & equipment */}
      <section aria-labelledby="capabilities-title" className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <SectionHeading
              id="capabilities-title"
              title={capabilitiesSection.title}
              highlight={capabilitiesSection.highlight}
              intro={capabilitiesSection.intro}
            />
            <dl className="grid grid-cols-2 gap-4">
              {capabilitiesSection.figures.map((figure) => (
                <div
                  key={figure.label}
                  className="flex flex-col-reverse bg-charcoal-900 p-6 text-center"
                >
                  <dt className="mt-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-charcoal-200 uppercase">
                    {figure.label}
                  </dt>
                  <dd className="text-gold-gradient text-4xl font-extrabold">{figure.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { title: ui.about.workforce, items: capabilitiesSection.workforce },
              { title: ui.about.fleet, items: capabilitiesSection.fleet },
              { title: ui.about.maintenance, items: capabilitiesSection.maintenance },
            ].map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08}>
                <h3 className="border-b border-charcoal-200 pb-3 text-sm font-semibold tracking-[0.18em] text-charcoal-900 uppercase">
                  {group.title}
                </h3>
                <div className="mt-5">
                  <CheckList items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* HSE & quality */}
      <section
        id="hse"
        aria-labelledby="hse-title"
        className="relative overflow-hidden surface-dark py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -start-20 -top-20 h-[130%] w-40 rotate-12 bg-gold-gradient opacity-10"
        />
        <Container className="relative">
          <SectionHeading
            id="hse-title"
            tone="dark"
            title={hse.title}
            highlight={hse.highlight}
            intro={hse.lead}
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            <Reveal>
              <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase">
                {hse.safetyTitle}
              </h3>
              <div className="mt-5">
                <CheckList items={hse.safety} tone="dark" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase">
                {hse.qualityTitle}
              </h3>
              <div className="mt-5">
                <CheckList items={hse.quality} tone="dark" />
              </div>
            </Reveal>
            <Reveal delay={0.16} className="grid gap-4">
              {hse.images.map((image) => (
                <Img key={image.src} image={image} className="aspect-[4/3] w-full object-cover" />
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Organisation chart */}
      <section aria-labelledby="org-title" className="bg-white py-24">
        <Container>
          <SectionHeading
            id="org-title"
            align="center"
            title={orgChart.title}
            highlight={orgChart.highlight}
          />
          <div className="mt-14 flex flex-col items-center">
            {orgChart.top.map((role, i) => (
              <div key={role} className="flex flex-col items-center">
                {i > 0 && <span aria-hidden="true" className="h-8 w-px bg-charcoal-400" />}
                <div
                  className={cn(
                    'min-w-56 px-8 py-4 text-center text-sm font-semibold tracking-[0.18em] uppercase',
                    i === 0 ? 'bg-gold-gradient text-charcoal-950' : 'surface-dark',
                  )}
                >
                  {role}
                </div>
              </div>
            ))}
            <span aria-hidden="true" className="h-8 w-px bg-charcoal-400" />
          </div>
          <ul className="relative grid gap-4 border-t border-charcoal-400 pt-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {orgChart.departments.map((dept) => (
              <li key={dept.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute start-1/2 -top-8 hidden h-8 w-px bg-charcoal-400 xl:block"
                />
                <div className="h-full border border-charcoal-200 bg-charcoal-50">
                  <h3 className="border-b-2 border-gold-500 bg-charcoal-900 px-3 py-3 text-center text-xs font-semibold tracking-wider text-white uppercase">
                    {dept.title}
                  </h3>
                  <ul className="space-y-2 p-3 text-center text-xs leading-snug text-charcoal-700">
                    {dept.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Documents */}
      <section aria-labelledby="documents-title" className="bg-charcoal-50 py-24">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="documents-title"
              title={aboutPage.documentsTitle}
              highlight={aboutPage.documentsHighlight}
              intro={aboutPage.documentsIntro}
            />
            <Button
              href={company.profilePdf}
              download
              icon={<Download className="size-4" />}
              className="self-start lg:self-auto"
            >
              {ui.companyProfile}
            </Button>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <li
                key={doc.title}
                className="flex h-full flex-col border border-charcoal-200 bg-white p-6"
              >
                <FileText aria-hidden="true" className="size-8 text-gold-700" />
                <h3 className="mt-4 font-semibold text-charcoal-900">{doc.title}</h3>
                <p className="mt-1 text-xs tracking-wider text-gold-700 uppercase">{doc.issuer}</p>
                <p className="mt-3 flex-1 text-sm text-charcoal-600">{doc.description}</p>
                {doc.file ? (
                  <a
                    href={doc.file}
                    download
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-700 uppercase hover:text-charcoal-900"
                  >
                    <Download aria-hidden="true" className="size-4" />
                    {ui.documents.download}
                    <span className="sr-only">: {doc.title}</span>
                  </a>
                ) : (
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-charcoal-600 uppercase">
                    <Lock aria-hidden="true" className="size-4" />
                    {ui.documents.onRequest}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
