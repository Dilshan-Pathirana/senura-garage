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
    'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:opacity-50'

  const styles: Record<Variant, string> = {
    primary: 'bg-accent text-bg hover:brightness-110',
    secondary: 'bg-surface text-text ring-1 ring-white/10 hover:bg-white/5',
    ghost: 'bg-transparent text-text hover:bg-white/5 ring-1 ring-white/10',
  }

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}
