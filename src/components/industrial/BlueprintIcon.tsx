import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type IconType = 'engineering' | 'manufacturing' | 'automation' | 'quality' | 'supply' | 'innovation'

type BlueprintIconProps = {
  type: IconType
  className?: string
  isHovered?: boolean
}

export function BlueprintIcon({ type, className = '', isHovered = false }: BlueprintIconProps) {
  const drawVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      },
    },
    hover: {
      pathLength: [1, 0, 1],
      transition: { duration: 1.5, ease: 'easeInOut', times: [0, 0.4, 1] },
    },
  }

  const getPath = (t: IconType) => {
    switch (t) {
      case 'engineering':
        return (
          <>
            <motion.path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              strokeWidth="1.5"
            />
            <motion.circle cx="12" cy="12" r="3" strokeWidth="1.5" />
            <motion.path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="1.5" />
          </>
        )
      case 'manufacturing':
        return (
          <>
            <motion.path
              d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2v16z"
              strokeWidth="1.5"
            />
            <motion.path d="M17 18h1" strokeWidth="1.5" />
            <motion.path d="M12 18h1" strokeWidth="1.5" />
            <motion.path d="M7 18h1" strokeWidth="1.5" />
          </>
        )
      case 'automation':
        return (
          <>
            <motion.path d="M12 8V4H8" strokeWidth="1.5" />
            <motion.rect x="4" y="12" width="16" height="8" rx="2" strokeWidth="1.5" />
            <motion.path d="M2 14h2" strokeWidth="1.5" />
            <motion.path d="M20 14h2" strokeWidth="1.5" />
            <motion.path d="M15 12V8h-6v4" strokeWidth="1.5" />
            <motion.circle cx="12" cy="5" r="2" strokeWidth="1.5" />
          </>
        )
      case 'quality':
        return (
          <>
            <motion.path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="1.5" />
            <motion.path d="M22 4L12 14.01l-3-3" strokeWidth="1.5" />
            <motion.circle cx="12" cy="12" r="14" strokeWidth="0.5" strokeDasharray="4 4" />
          </>
        )
      case 'supply':
        return (
          <>
            <motion.path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              strokeWidth="1.5"
            />
            <motion.path d="M3.27 6.96L12 12.01l8.73-5.05" strokeWidth="1.5" />
            <motion.path d="M12 22.08V12" strokeWidth="1.5" />
          </>
        )
      case 'innovation':
        return (
          <>
            <motion.path d="M9 18h6" strokeWidth="1.5" />
            <motion.path d="M10 22h4" strokeWidth="1.5" />
            <motion.path d="M12 2v4" strokeWidth="1.5" />
            <motion.path d="M12 14v-4" strokeWidth="1.5" />
            <motion.path d="M4.2 4.2l2.8 2.8" strokeWidth="1.5" />
            <motion.path d="M19.8 4.2l-2.8 2.8" strokeWidth="1.5" />
            <motion.path d="M15 9a3 3 0 1 1-6 0" strokeWidth="1.5" />
          </>
        )
    }
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.g
        variants={drawVariants}
        initial="hidden"
        animate={isHovered ? 'hover' : 'visible'}
        stroke="rgb(var(--dm-accent))"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {getPath(type)}
      </motion.g>
    </svg>
  )
}
