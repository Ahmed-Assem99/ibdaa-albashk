import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps<T extends ElementType> = {
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component: ElementType = as ?? 'div'
  return (
    <Component
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
