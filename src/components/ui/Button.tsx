import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
  }
>

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-none px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:opacity-50'

  const styles: Record<Variant, string> = {
    primary:
      'bg-accent text-black hover:bg-accent/90',
    secondary:
      'bg-surface text-text ring-1 ring-border/80 hover:ring-accent/60 hover:bg-surface/80',
    ghost: 'bg-transparent text-text hover:bg-surface hover:text-accent',
  }

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}
