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
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-heading font-medium uppercase tracking-wider transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:opacity-50'

  const styles: Record<Variant, string> = {
    primary: 'bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-accent/40',
    secondary: 'bg-white/5 text-text ring-1 ring-white/10 hover:bg-white/10 backdrop-blur-sm',
    ghost: 'bg-transparent text-text hover:bg-white/5 hover:text-accent',
  }

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}
