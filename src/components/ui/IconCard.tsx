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
        'group relative overflow-hidden rounded-none border border-border bg-surface p-6 transition-all hover:translate-y-[-2px] hover:border-accent',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-bg transition-colors group-hover:border-accent">
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
