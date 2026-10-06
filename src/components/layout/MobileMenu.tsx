import type { Ref } from 'react'
import { NavLink } from 'react-router'
import { Mail, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { mainNav } from '@/data/navigation'
import { ui } from '@/data/ui'
import { cn } from '@/lib/cn'
import { Logo } from './Logo'

interface MobileMenuProps {
  ref: Ref<HTMLDialogElement>
}

/** Slide-in navigation panel for small screens, built on the native <dialog>. */
export function MobileMenu({ ref }: MobileMenuProps) {
  const close = (e: React.SyntheticEvent) => {
    e.currentTarget.closest('dialog')?.close()
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- backdrop click is a mouse convenience; Esc closes the native dialog
    <dialog
      ref={ref}
      aria-label={ui.primaryNavLabel}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
      className="mobile-menu ms-auto me-0 h-dvh max-h-none w-[min(22rem,88vw)] surface-dark p-0 backdrop:bg-charcoal-950/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex h-full flex-col bg-charcoal-950">
        <div aria-hidden="true" className="h-1 bg-gold-gradient" />
        <div className="flex items-center justify-between px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={close}
            className="grid size-11 place-items-center text-white hover:text-gold-300"
          >
            <X aria-hidden="true" className="size-7" />
            <span className="sr-only">{ui.menuClose}</span>
          </button>
        </div>
        <nav aria-label={ui.primaryNavLabel} className="flex-1 px-5 pt-6">
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.to} className="border-b border-white/10">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={close}
                  className={({ isActive }) =>
                    cn(
                      'block py-4 text-lg font-semibold tracking-[0.14em] uppercase',
                      isActive ? 'text-gold-300' : 'text-white hover:text-gold-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" onClick={close} className="mt-8 w-full" size="lg">
            {ui.contactCta}
          </Button>
        </nav>
        <div className="space-y-3 px-5 py-6 text-sm text-charcoal-200">
          <a href={company.phone.href} className="flex items-center gap-3 hover:text-gold-300">
            <Phone aria-hidden="true" className="size-4 text-gold-300" />
            <span dir="ltr">{company.phone.display}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-3 break-all hover:text-gold-300"
          >
            <Mail aria-hidden="true" className="size-4 shrink-0 text-gold-300" />
            {company.email}
          </a>
        </div>
      </div>
    </dialog>
  )
}
