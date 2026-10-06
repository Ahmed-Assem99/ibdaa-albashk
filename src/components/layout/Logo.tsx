import logoUrl from '@/assets/logo.svg'
import { company } from '@/data/company'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  /** Show the company name next to the mark. */
  withName?: boolean
}

export function Logo({ className, withName = true }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <img src={logoUrl} alt="" width={44} height={44} className="size-11 shrink-0" />
      {withName && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-extrabold tracking-[0.12em] text-white uppercase">
            Ibdaa <span className="text-gold-gradient">Albashq</span>
          </span>
          <span className="mt-1 text-[0.625rem] tracking-[0.2em] text-charcoal-200 uppercase">
            General Contracting
          </span>
        </span>
      )}
      {!withName && <span className="sr-only">{company.name}</span>}
    </span>
  )
}
