import { motion } from 'framer-motion'

export function IndustrialGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(var(--dm-border)) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(var(--dm-border)) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(var(--dm-accent)) 1px, transparent 1px)`,
          backgroundSize: '100% 16rem',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 z-10 h-1/3 bg-gradient-to-t from-bg to-transparent" />

      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-accent shadow-[0_0_15px_rgb(var(--dm-accent)/0.8)]"
        initial={{ top: '-10%' }}
        animate={{ top: '120%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />
    </div>
  )
}
