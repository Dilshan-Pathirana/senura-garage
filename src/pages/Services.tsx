import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MotionInView } from '../components/ui/MotionInView'
import { IconCard } from '../components/ui/IconCard'
import { site } from '../config/site'
import { Gauge, Shield, Snowflake, Sparkles, Wrench } from 'lucide-react'

import type { ReactNode } from 'react'

type ServiceCategory = {
  title: string
  items: Array<{ name: string; desc: string; icon: ReactNode }>
}

export function Services() {
  const categories: ServiceCategory[] = [
    {
      title: 'Jeep Modification Services',
      items: [
        { name: 'Suspension lift kits', desc: 'Trail-ready lift setups and fitment.', icon: <Shield className="h-5 w-5" /> },
        { name: 'Off-road protection', desc: 'Underbody and protective upgrades.', icon: <Shield className="h-5 w-5" /> },
        { name: 'Wheel & tire upgrades', desc: 'Sizing guidance and safe installation.', icon: <Gauge className="h-5 w-5" /> },
        { name: 'Body customization', desc: 'Functional styling and practical builds.', icon: <Sparkles className="h-5 w-5" /> },
      ],
    },
    {
      title: 'Performance Upgrades',
      items: [
        { name: 'Turbo tuning', desc: 'Balanced tuning for power and drivability.', icon: <Gauge className="h-5 w-5" /> },
        { name: 'Engine overhaul & rebuild', desc: 'Workshop-grade engine work.', icon: <Wrench className="h-5 w-5" /> },
        { name: 'Exhaust systems', desc: 'Flow improvements with proper fitment.', icon: <Sparkles className="h-5 w-5" /> },
        { name: 'Power steering enhancements', desc: 'Steering reliability upgrades.', icon: <Wrench className="h-5 w-5" /> },
      ],
    },
    {
      title: 'Mechanical & Repair',
      items: [
        { name: 'Brake service', desc: 'Inspection, service, and replacements.', icon: <Wrench className="h-5 w-5" /> },
        { name: 'Gearbox repair', desc: 'Diagnostics and mechanical repair.', icon: <Wrench className="h-5 w-5" /> },
        { name: 'Electrical & wiring', desc: 'Reliable wiring and troubleshooting.', icon: <Sparkles className="h-5 w-5" /> },
        { name: 'Air conditioning', desc: 'Cooling checks and repair support.', icon: <Snowflake className="h-5 w-5" /> },
      ],
    },
  ]

  return (
    <>
      <Seo
        title={`Services | ${site.fullName}`}
        description="Explore Dilini Motors services: Jeep modifications, performance upgrades, and mechanical repairs in Nittambuwa, Sri Lanka."
      />

      <Section>
        <Container>
          <MotionInView>
            <h1 className="text-3xl font-black">Services</h1>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Clear categories for upgrades and repairs. Each service can be expanded with photos and project
              examples as you add them.
            </p>
          </MotionInView>
        </Container>
      </Section>

      {categories.map((c, idx) => (
        <Section key={c.title} className={idx % 2 === 1 ? 'bg-surface/40' : undefined}>
          <Container>
            <MotionInView>
              <h2 className="text-2xl font-black">{c.title}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {c.items.map((item) => (
                  <IconCard key={item.name} title={item.name} icon={item.icon}>
                    {item.desc}
                  </IconCard>
                ))}
              </div>
            </MotionInView>
          </Container>
        </Section>
      ))}
    </>
  )
}
