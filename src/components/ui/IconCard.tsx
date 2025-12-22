import type { PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type IconCardProps = PropsWithChildren<{
  title: string
  icon: ReactNode
  className?: string
}>

export function IconCard({ title, icon, className, children }: IconCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-surface p-5 ring-1 ring-white/10 transition hover:bg-white/5',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
          <span className="text-accent">{icon}</span>
        </div>
        <div className="min-w-0">
          <div className="text-base font-extrabold">{title}</div>
          <div className="mt-1 text-sm text-muted">{children}</div>
        </div>
      </div>
    </div>
  )
}
