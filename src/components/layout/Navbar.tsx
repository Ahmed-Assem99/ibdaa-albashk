import { useRef } from 'react'
import { Link, NavLink } from '@/i18n/Link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useContent } from '@/i18n/useLocale'
import { LanguageSwitch } from '@/i18n/LanguageSwitch'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const { ui, nav } = useContent()
  const scrolled = useScrolled()
  const menuRef = useRef<HTMLDialogElement>(null)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 surface-dark transition-[background-color,box-shadow,backdrop-filter] duration-300',
        scrolled
          ? 'bg-charcoal-950/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label={ui.primaryNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold-gradient after:transition-transform rtl:after:origin-right',
                      isActive
                        ? 'text-gold-300 after:scale-x-100'
                        : 'text-white/85 after:scale-x-0 hover:text-white hover:after:scale-x-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch className="px-2 py-2" />
          <Button to="/contact" className="hidden sm:inline-flex">
            {ui.contactCta}
          </Button>
          <button
            type="button"
            onClick={() => menuRef.current?.showModal()}
            className="grid size-11 place-items-center text-white hover:text-gold-300 lg:hidden"
            aria-haspopup="dialog"
          >
            <Menu aria-hidden="true" className="size-7" />
            <span className="sr-only">{ui.menuOpen}</span>
          </button>
        </div>
      </Container>
      <MobileMenu ref={menuRef} />
    </header>
  )
}
