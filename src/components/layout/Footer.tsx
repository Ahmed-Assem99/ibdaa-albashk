import { Link } from 'react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'
import { mainNav } from '@/data/navigation'
import { services } from '@/data/services'
import { ui } from '@/data/ui'
import { Logo } from './Logo'

const linkClass = 'text-sm text-charcoal-200 transition-colors hover:text-gold-300'

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-5 text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
      {children}
    </h2>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden surface-dark bg-charcoal-950">
      <div aria-hidden="true" className="h-1 bg-gold-gradient" />
      <div
        aria-hidden="true"
        className="absolute -end-40 top-0 h-full w-96 bg-charcoal-900 [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] rtl:-scale-x-100"
      />
      <Container className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        <div>
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-charcoal-200">
            {company.description}
          </p>
          <p className="mt-5 text-sm font-semibold tracking-[0.16em] text-gold-300 uppercase">
            {company.tagline}
          </p>
        </div>

        <nav aria-labelledby="footer-links">
          <h2
            id="footer-links"
            className="mb-5 text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase"
          >
            {ui.footer.quickLinks}
          </h2>
          <ul className="space-y-3">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <FooterHeading>{ui.footer.services}</FooterHeading>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/projects?category=${service.id}`} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>{ui.footer.contact}</FooterHeading>
          <address className="space-y-4 not-italic">
            <p className="flex gap-3 text-sm text-charcoal-200">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <span>
                {company.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <a href={company.phone.href} className={`flex gap-3 ${linkClass}`}>
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              <span dir="ltr">{company.phone.display}</span>
            </a>
            <a href={`mailto:${company.email}`} className={`flex gap-3 break-all ${linkClass}`}>
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-300" />
              {company.email}
            </a>
          </address>
        </div>
      </Container>
      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-charcoal-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{ui.footer.rights(year, company.legalName)}</p>
          <p lang="ar" dir="rtl">
            {company.legalNameAr}
          </p>
        </Container>
      </div>
    </footer>
  )
}
