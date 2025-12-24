import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MotionInView } from '../components/ui/MotionInView'
import { site } from '../config/site'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IndustrialGrid } from '../components/industrial/IndustrialGrid'
import { ServiceCard, type ServiceCardIconType } from '../components/industrial/ServiceCard'
import { Link } from 'react-router-dom'

import type { ReactNode } from 'react'

type ServiceCategory = {
  title: string
  items: Array<{ name: string; desc: string; icon: ReactNode }>
}

export function Services() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const categories: ServiceCategory[] = [
    {
      title: 'Jeep Modification Services',
      items: [
        { name: 'Suspension lift kits', desc: 'Trail-ready lift setups and fitment.', icon: null },
        { name: 'Off-road protection', desc: 'Underbody and protective upgrades.', icon: null },
        { name: 'Wheel & tire upgrades', desc: 'Sizing guidance and safe installation.', icon: null },
        { name: 'Body customization', desc: 'Functional styling and practical builds.', icon: null },
      ],
    },
    {
      title: 'Performance Upgrades',
      items: [
        { name: 'Turbo tuning', desc: 'Balanced tuning for power and drivability.', icon: null },
        { name: 'Engine overhaul & rebuild', desc: 'Workshop-grade engine work.', icon: null },
        { name: 'Exhaust systems', desc: 'Flow improvements with proper fitment.', icon: null },
        { name: 'Power steering enhancements', desc: 'Steering reliability upgrades.', icon: null },
      ],
    },
    {
      title: 'Mechanical & Repair',
      items: [
        { name: 'Brake service', desc: 'Inspection, service, and replacements.', icon: null },
        { name: 'Gearbox repair', desc: 'Diagnostics and mechanical repair.', icon: null },
        { name: 'Electrical & wiring', desc: 'Reliable wiring and troubleshooting.', icon: null },
        { name: 'Air conditioning', desc: 'Cooling checks and repair support.', icon: null },
      ],
    },
  ]

  const iconTypeForCategory = (title: string): ServiceCardIconType => {
    if (title === 'Jeep Modification Services') return 'engineering'
    if (title === 'Performance Upgrades') return 'automation'
    return 'quality'
  }

  const cards = categories.flatMap((c) =>
    c.items.map((item) => ({
      title: item.name,
      description: item.desc,
      iconType: iconTypeForCategory(c.title),
    })),
  )

  return (
    <>
      <Seo
        title={`Services | ${site.fullName}`}
        description="Explore Dilini Motors services: Jeep modifications, performance upgrades, and mechanical repairs in Nittambuwa, Sri Lanka."
      />

      <section className="relative flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden border-b border-border">
        <IndustrialGrid />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full">
          <Container className="px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <span className="mb-6 inline-block border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-accent backdrop-blur-sm">
                System Status: Operational
              </span>
              <h1 className="mb-6 font-heading text-7xl leading-[0.85] tracking-tightest md:text-9xl">
                Workshop
                <br />
                <span className="bg-linear-to-r from-text to-muted bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="mx-auto mb-10 max-w-xl text-lg font-light text-muted">
                Jeep modifications, performance upgrades, and workshop-grade repairs—built for Sri Lankan roads and trails.
              </p>

              <Link to="/contact" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-black"
                >
                  <span className="relative z-10 flex items-center">
                    Initialize Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  <div className="absolute inset-0 scale-90 border-2 border-white/0 transition-all duration-300 group-hover:scale-100 group-hover:border-white/20" />
                </motion.button>
              </Link>
            </motion.div>
          </Container>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </section>

      <section className="relative bg-bg py-32">
        <Container className="mb-20 px-6">
          <div className="flex flex-col justify-between gap-8 border-b border-border pb-8 md:flex-row md:items-end">
            <div>
              <h2 className="mb-2 font-heading text-5xl tracking-tight md:text-6xl">Core Capabilities</h2>
              <div className="h-1 w-20 bg-accent" />
            </div>
            <p className="max-w-md text-sm text-muted md:text-right">
              Select a module below to view service details and scope.
            </p>
          </div>
        </Container>

        <Container className="px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div key={`${card.title}-${index}`} className="h-100">
                <ServiceCard {...card} index={index} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <MotionInView>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { label: 'Jeep Modifications', value: 'Module A' },
                { label: 'Performance Upgrades', value: 'Module B' },
                { label: 'Mechanical & Repair', value: 'Module C' },
                { label: 'Custom Builds', value: 'Module D' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mb-2 font-heading text-4xl text-accent md:text-5xl">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </MotionInView>
        </Container>
      </Section>

      <section className="relative flex min-h-150 flex-col md:flex-row">
        <div className="relative min-h-75 w-full overflow-hidden bg-surface md:w-1/2">
          <div className="absolute inset-0 z-10 bg-linear-to-br from-accent/20 to-bg" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgb(var(--dm-accent)) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border border-accent/30 animate-[spin_10s_linear_infinite]">
              <div className="h-48 w-48 rounded-full border border-dashed border-accent/50" />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center border-l border-border bg-bg p-12 md:w-1/2 md:p-20">
          <div className="max-w-lg">
            <h2 className="mb-6 font-heading text-5xl tracking-tight md:text-6xl">
              Ready to <span className="text-accent">Build</span> Your Jeep?
            </h2>
            <p className="mb-10 leading-relaxed text-muted">
              Contact us for an initial consultation and a practical plan for upgrades, repairs, or a full custom build.
            </p>

            <Link to="/contact" className="no-underline">
              <button className="w-full bg-white py-4 font-bold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-accent">
                Request Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
