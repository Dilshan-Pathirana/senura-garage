import type { PropsWithChildren } from 'react'
import { cn } from '../../utils/cn'

type SectionProps = PropsWithChildren<{
  className?: string
  id?: string
}>

export function Section({ className, id, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-14 sm:py-16', className)}>
      {children}
    </section>
  )
}
