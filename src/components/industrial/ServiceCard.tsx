import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BlueprintIcon } from './BlueprintIcon'

export type ServiceCardIconType =
  | 'engineering'
  | 'manufacturing'
  | 'automation'
  | 'quality'
  | 'supply'
  | 'innovation'

type ServiceCardProps = {
  title: string
  description: string
  iconType: ServiceCardIconType
  index: number
}

export function ServiceCard({ title, description, iconType, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div
        className="absolute -right-3 -top-3 z-0 h-16 w-16 bg-accent/10 transition-all duration-300 group-hover:bg-accent/20"
        style={{
          clipPath:
            'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        }}
      />

      <div className="relative z-10 h-full border border-border bg-surface p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent">
        <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="mb-6 flex items-start justify-between">
          <div className="rounded-sm border border-border bg-bg p-3">
            <BlueprintIcon type={iconType} className="h-10 w-10" isHovered={isHovered} />
          </div>
          <span className="font-mono text-xs text-border opacity-50 transition-colors group-hover:text-accent">
            0{index + 1}
          </span>
        </div>

        <h3 className="mb-3 font-heading text-2xl tracking-wide text-text transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted">{description}</p>

        <div className="-translate-x-4 flex items-center text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <span className="mr-2 text-xs uppercase tracking-wider">Details</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  )
}
