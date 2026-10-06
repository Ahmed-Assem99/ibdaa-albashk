import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { LinkProps } from 'react-router'
import { Link } from '@/i18n/Link'
import { cn } from '@/lib/cn'

type Variant = 'gold' | 'outline' | 'outline-dark'
type Size = 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  icon?: ReactNode
}

type AsLink = BaseProps & Omit<LinkProps, 'className' | 'children'> & { to: LinkProps['to'] }
type AsAnchor = BaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'className' | 'children'> & { href: string; to?: never }
type AsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'> & { to?: never; href?: never }

export type ButtonProps = AsLink | AsAnchor | AsButton

const base =
  'group inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wider transition duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  gold: 'bg-gold-gradient text-charcoal-950 shadow-[0_8px_24px_-12px_rgba(217,169,79,0.8)] hover:brightness-110 hover:shadow-[0_12px_28px_-10px_rgba(217,169,79,0.9)]',
  outline: 'border border-gold-gradient text-gold-100 hover:bg-white/5 hover:text-white',
  'outline-dark':
    'border border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-3 text-xs',
  lg: 'px-7 py-4 text-sm',
}

/** Gold or outline button. Renders a router Link (`to`), an anchor (`href`) or a button. */
export function Button(props: ButtonProps) {
  const { variant = 'gold', size = 'md', className, children, icon, ...rest } = props
  const classes = cn(base, variants[variant], sizes[size], className)
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
        >
          {icon}
        </span>
      )}
    </>
  )

  if ('to' in rest && rest.to !== undefined) {
    return (
      <Link className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    )
  }
  const buttonProps = rest as Omit<AsButton, keyof BaseProps>
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  )
}
