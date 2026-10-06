import { Clock, Download, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { company } from '@/data/company'
import { contactPage, pageMeta } from '@/data/pages'
import { ui } from '@/data/ui'
import { useSeo } from '@/hooks/useSeo'

export function ContactPage() {
  useSeo(pageMeta.contact)

  const details = [
    { icon: MapPin, label: ui.contact.address, content: company.address.lines.join(', ') },
    {
      icon: Phone,
      label: ui.contact.phone,
      content: (
        <a href={company.phone.href} dir="ltr" className="hover:text-gold-300">
          {company.phone.display}
        </a>
      ),
    },
    {
      icon: Mail,
      label: ui.contact.email,
      content: (
        <a href={`mailto:${company.email}`} className="break-all hover:text-gold-300">
          {company.email}
        </a>
      ),
    },
    { icon: Clock, label: ui.contact.hours, content: company.workingHours },
  ]

  return (
    <>
      <PageHeader
        title={contactPage.title}
        highlight={contactPage.highlight}
        intro={contactPage.intro}
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section aria-label="Contact details and form" className="bg-white pb-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="space-y-6">
            <div className="surface-dark p-8">
              <h2 className="text-lg font-light tracking-wide text-white uppercase">
                <span className="text-gold-gradient font-semibold">{contactPage.detailsTitle}</span>
              </h2>
              <ul className="mt-6 space-y-6">
                {details.map(({ icon: Icon, label, content }) => (
                  <li key={label} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center border border-gold-500/50 text-gold-300">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                        {label}
                      </p>
                      <div className="mt-1 text-charcoal-100">{content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden bg-gold-gradient p-8 text-charcoal-950">
              <h2 className="text-lg font-extrabold tracking-wide uppercase">
                {contactPage.profileTitle}
              </h2>
              <p className="mt-2 text-sm text-charcoal-900">{contactPage.profileText}</p>
              <a
                href={company.profilePdf}
                download
                className="mt-6 inline-flex items-center gap-2 bg-charcoal-950 px-6 py-4 text-sm font-semibold tracking-wider text-gold-100 uppercase transition hover:bg-charcoal-800 focus-visible:outline-charcoal-950"
              >
                <Download aria-hidden="true" className="size-4" />
                {contactPage.profileCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <SectionHeading title={contactPage.formTitle} highlight="message" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section aria-label={ui.contact.mapTitle} className="relative bg-charcoal-100">
        <iframe
          title={ui.contact.mapTitle}
          src={company.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[28rem] w-full border-0 grayscale-[40%]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold-gradient" />
      </section>
    </>
  )
}
