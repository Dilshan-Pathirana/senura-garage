import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, MessageCircle, Phone, Shield, Wrench } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { IconCard } from '../components/ui/IconCard'
import { MotionInView } from '../components/ui/MotionInView'
import { site, telHref, whatsappHref, googleMapsEmbedUrl } from '../config/site'
import { Link } from 'react-router-dom'

type Slide = {
  id: string
  headline: string
  sub: string
  bgClass: string
}

export function Home() {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: 's1',
        headline: site.fullName,
        sub: site.tagline,
        bgClass:
          'bg-[radial-gradient(circle_at_20%_20%,rgb(var(--dm-accent)/0.35),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.10),transparent_35%),linear-gradient(to_bottom,rgb(var(--dm-bg)),rgb(var(--dm-surface)))]',
      },
      {
        id: 's2',
        headline: 'Off-road protection. Lift kits. Builds.',
        sub: 'Durable upgrades for Sri Lankan trails and daily driving.',
        bgClass:
          'bg-[radial-gradient(circle_at_70%_20%,rgb(var(--dm-accent)/0.25),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_45%),linear-gradient(to_bottom,rgb(var(--dm-bg)),rgb(var(--dm-surface)))]',
      },
      {
        id: 's3',
        headline: 'Mechanical & repair you can trust',
        sub: 'Brakes, gearbox, wiring, AC, and workshop-grade care.',
        bgClass:
          'bg-[radial-gradient(circle_at_30%_30%,rgb(var(--dm-accent)/0.22),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_45%),linear-gradient(to_bottom,rgb(var(--dm-bg)),rgb(var(--dm-surface)))]',
      },
    ],
    [],
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = window.setInterval(() => setIndex((v) => (v + 1) % slides.length), 6000)
    return () => window.clearInterval(t)
  }, [slides.length])

  const slide = slides[index]
  const mapEmbed = googleMapsEmbedUrl(site.location.mapQuery)

  return (
    <>
      <Seo
        title={`${site.fullName} | Nittambuwa, Sri Lanka`}
        description="Premium Jeep modifications, custom off-road builds, performance upgrades, and mechanical repairs in Nittambuwa, Sri Lanka."
      />

      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${slide.bgClass}`} />
        <div className="absolute inset-0 bg-black/50" />

        <Container className="relative py-20 sm:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-muted ring-1 ring-white/10">
                <MapPin className="h-3.5 w-3.5 text-accent" /> {site.location.addressLine}
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                {slide.headline}
              </h1>
              <p className="mt-4 text-base text-muted sm:text-lg">{slide.sub}</p>

              <p className="mt-6 max-w-2xl text-sm text-muted">
                Suspension lift kits, off-road protection, wheel & tire upgrades, turbo tuning, engine rebuilds,
                and reliable workshop repairs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={telHref(site.contact.primaryPhone)} className="no-underline">
                  <Button className="w-full sm:w-auto">
                    <Phone className="h-4 w-4" /> Call
                  </Button>
                </a>
                <a
                  href={whatsappHref(site.contact.primaryPhone, 'Hi Dilini Motors, I’d like to inquire about a service.')}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  <Button variant="secondary" className="w-full sm:w-auto">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </a>
                <Link to="/services" className="no-underline">
                  <Button variant="ghost" className="w-full sm:w-auto">
                    View Services <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
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
                  className="min-w-[280px] shrink-0 overflow-hidden rounded-xl bg-bg ring-1 ring-white/10"
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
              <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
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

              <div className="overflow-hidden rounded-2xl bg-bg ring-1 ring-white/10">
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
