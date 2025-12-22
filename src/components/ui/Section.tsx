import type { PropsWithChildren } from 'react'
import { cn } from '../../utils/cn'

type SectionProps = PropsWithChildren<{
  className?: string
  id?: string
}>

export function Section({ className, id, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)}>
      {children}
    </section>
  )
}
