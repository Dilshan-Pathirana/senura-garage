import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MotionInView } from '../components/ui/MotionInView'
import { site } from '../config/site'
import { IconCard } from '../components/ui/IconCard'
import { BadgeCheck, Handshake, Shield, Wrench } from 'lucide-react'

export function About() {
  return (
    <>
      <Seo
        title={`About | ${site.fullName}`}
        description="Learn about Dilini Motors—our mission, specialization, and why customers choose us for premium Jeep modifications and repairs."
      />

      <Section>
        <Container>
          <MotionInView>
            <h1 className="text-3xl font-black">About Us</h1>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Dilini Motors is a Jeep modification garage based in Nittambuwa, Sri Lanka. We focus on durable,
              authentic upgrades and reliable workshop repairs—built around your needs and budget.
            </p>
          </MotionInView>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <MotionInView>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <IconCard title="Expert mechanics" icon={<Wrench className="h-5 w-5" />}>
                Skilled hands for both upgrades and repairs.
              </IconCard>
              <IconCard title="Authentic upgrades" icon={<Shield className="h-5 w-5" />}>
                Strong, trail-ready parts and workmanship.
              </IconCard>
              <IconCard title="Personalized service" icon={<Handshake className="h-5 w-5" />}>
                Clear recommendations based on your use case.
              </IconCard>
              <IconCard title="Transparent pricing" icon={<BadgeCheck className="h-5 w-5" />}>
                Straightforward quotes and honest timelines.
              </IconCard>
            </div>
          </MotionInView>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionInView>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-black">Our Mission</h2>
                <p className="mt-3 text-sm text-muted">
                  Build premium Jeep upgrades and dependable repairs that match Sri Lankan road conditions and
                  off-road demands—without compromising safety.
                </p>
                <p className="mt-3 text-sm text-muted">
                  If you’re planning a lift kit, protection build, performance upgrade, or mechanical work, we’ll
                  guide you through options with a practical, workshop-first mindset.
                </p>
              </div>
              <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
                <div className="text-sm font-bold">Location</div>
                <p className="mt-2 text-sm text-muted">{site.location.addressLine}</p>
                <div className="mt-4 rounded-xl bg-bg p-5 ring-1 ring-white/10">
                  <div className="text-xs font-semibold text-muted">Specialization</div>
                  <div className="mt-2 text-sm">
                    Jeep modifications • Performance upgrades • Mechanical & repair
                  </div>
                </div>
              </div>
            </div>
          </MotionInView>
        </Container>
      </Section>
    </>
  )
}
