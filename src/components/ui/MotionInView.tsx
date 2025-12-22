import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

type MotionInViewProps = PropsWithChildren<{
  className?: string
}>

export function MotionInView({ className, children }: MotionInViewProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
