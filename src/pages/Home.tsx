import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, MapPin, MessageCircle, Phone, Shield, Wrench } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { IconCard } from '../components/ui/IconCard'
import { MotionInView } from '../components/ui/MotionInView'
import { site, telHref, whatsappHref, googleMapsEmbedUrl } from '../config/site'
import { Link } from 'react-router-dom'
import { IndustrialGrid } from '../components/industrial/IndustrialGrid'

export function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const mapEmbed = googleMapsEmbedUrl(site.location.mapQuery)

  return (
    <>
      <Seo
        title={`${site.fullName} | Nittambuwa, Sri Lanka`}
        description="Premium Jeep modifications, custom off-road builds, performance upgrades, and mechanical repairs in Nittambuwa, Sri Lanka."
      />

      <section className="relative flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden border-b border-border">
        <IndustrialGrid />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full">
          <Container className="px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <span className="mb-6 inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-3 py-1 text-xs tracking-widest text-accent backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" /> {site.location.addressLine}
              </span>

              <span className="mb-6 block text-[10px] font-mono uppercase tracking-widest text-muted">
                System Status: Operational
              </span>

              <h1 className="mb-6 font-heading text-7xl leading-[0.85] tracking-tightest text-text md:text-9xl">
                Dilini
                <br />
                <span className="bg-linear-to-r from-text to-muted bg-clip-text text-transparent">Motors</span>
              </h1>

              <p className="mx-auto mb-10 max-w-xl text-lg font-light text-muted">{site.tagline}</p>

              <Link to="/services" className="no-underline">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Button className="px-8 py-4">
                    Initialize Project <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
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

      <Section>
        <Container>
          <MotionInView>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-black">Services Snapshot</h2>
                <p className="mt-2 text-sm text-muted">Fast overview of what we do.</p>
              </div>
              <Link to="/services" className="hidden no-underline sm:inline">
                <Button variant="secondary">
                  All Services <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <IconCard title="Jeep Modifications" icon={<Shield className="h-5 w-5" />}>
                Lift kits, off-road protection, wheels & tires, body customization.
              </IconCard>
              <IconCard title="Performance Upgrades" icon={<Wrench className="h-5 w-5" />}>
                Turbo tuning, rebuilds, exhaust systems, steering enhancements.
              </IconCard>
              <IconCard title="Mechanical & Repair" icon={<Wrench className="h-5 w-5" />}>
                Brakes, gearbox repair, electrical & wiring, air conditioning.
              </IconCard>
              <IconCard title="Custom Builds" icon={<Shield className="h-5 w-5" />}>
                Full off-road builds tailored to your goals and budget.
              </IconCard>
            </div>
          </MotionInView>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <MotionInView>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-black">Recent Projects</h2>
                <p className="mt-2 text-sm text-muted">A quick look at workshop-style work.</p>
              </div>
              <Link to="/gallery" className="hidden no-underline sm:inline">
                <Button variant="secondary">
                  View Gallery <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
              {[
                'Toyota Land Cruiser 80 Series – Lifted & Rebuilt',
                'Jeep Suspension Lift + Off-road Protection',
                'Exhaust + Performance Tuning Setup',
                'Gearbox Service + Electrical Diagnostics',
              ].map((caption) => (
                <div
                  key={caption}
                  className="min-w-70 shrink-0 overflow-hidden rounded-none bg-bg ring-1 ring-border/80"
                >
                  <div className="h-40 bg-[radial-gradient(circle_at_30%_30%,rgb(var(--dm-accent)/0.25),transparent_55%),linear-gradient(to_bottom,rgb(var(--dm-surface)),rgb(var(--dm-bg)))]" />
                  <div className="p-4">
                    <div className="text-sm font-bold">{caption}</div>
                    <div className="mt-1 text-xs text-muted">Hover-friendly, lightbox-ready gallery items.</div>
                  </div>
                </div>
              ))}
            </div>
          </MotionInView>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionInView>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-black">About Dilini Motors</h2>
                <p className="mt-3 text-sm text-muted">
                  We’re a Jeep modification garage in Nittambuwa focused on premium, durable, and workshop-grade
                  builds—from upgrades to full custom projects.
                </p>
                <div className="mt-6">
                  <Link to="/about" className="no-underline">
                    <Button variant="secondary">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="border border-border bg-surface p-6">
                <div className="text-sm font-bold">Why Choose Us</div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>• Expert mechanics</li>
                  <li>• Durable, authentic upgrades</li>
                  <li>• Personalized service</li>
                  <li>• Transparent pricing</li>
                </ul>
              </div>
            </div>
          </MotionInView>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <MotionInView>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-black">Location & Contact</h2>
                <p className="mt-2 text-sm text-muted">
                  Find us in Nittambuwa and contact us quickly via Call or WhatsApp.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={telHref(site.contact.primaryPhone)} className="no-underline">
                    <Button className="w-full sm:w-auto">
                      <Phone className="h-4 w-4" /> Call
                    </Button>
                  </a>
                  <a href={whatsappHref(site.contact.primaryPhone)} target="_blank" rel="noreferrer" className="no-underline">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              <div className="overflow-hidden border border-border bg-bg">
                <iframe
                  title="Dilini Motors Map"
                  src={mapEmbed}
                  loading="lazy"
                  className="h-72 w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </MotionInView>
        </Container>
      </Section>
    </>
  )
}
