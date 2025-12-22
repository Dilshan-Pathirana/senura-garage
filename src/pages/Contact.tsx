import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MotionInView } from '../components/ui/MotionInView'
import { Button } from '../components/ui/Button'
import { site, telHref, whatsappHref, googleMapsEmbedUrl } from '../config/site'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
  honey: string
  image?: File | null
}

export function Contact() {
  const mapEmbed = googleMapsEmbedUrl(site.location.mapQuery)
  const [state, setState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honey: '',
    image: null,
  })

  const whatsappMessage = useMemo(() => {
    const lines = [
      `Name: ${state.name || '-'}`,
      `Email: ${state.email || '-'}`,
      `Phone: ${state.phone || '-'}`,
      `Message: ${state.message || '-'}`,
    ]
    return `Hi Dilini Motors, I’d like to contact you.%0A%0A${lines.join('%0A')}`
  }, [state.name, state.email, state.phone, state.message])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (state.honey) return

    const url = whatsappHref(site.contact.primaryPhone) + `?text=${whatsappMessage}`
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <>
      <Seo
        title={`Contact | ${site.fullName}`}
        description="Contact Dilini Motors via phone/WhatsApp, send a message, and find us on the map in Nittambuwa, Sri Lanka."
      />

      <Section>
        <Container>
          <MotionInView>
            <h1 className="text-3xl font-black">Contact Us</h1>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Quick contact via Call or WhatsApp, or send a message using the form.
            </p>
          </MotionInView>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <MotionInView>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl bg-bg p-6 ring-1 ring-white/10">
                <div className="text-sm font-bold">Contact details</div>
                <div className="mt-4 space-y-3 text-sm text-muted">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                    <div>{site.location.addressLine}</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    <div className="space-y-1">
                      {site.contact.displayPhones.map((p, idx) => (
                        <a key={p} href={telHref(site.contact.phones[idx])}>
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <span className="text-muted">Email: </span>
                      <span className="text-text">(add if available)</span>
                    </div>
                  </div>
                </div>

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

                <p className="mt-4 text-xs text-muted">
                  This is a frontend-only site. The form opens WhatsApp with your message (optional image upload
                  is not sent automatically).
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl bg-bg ring-1 ring-white/10">
                <iframe
                  title="Dilini Motors Map"
                  src={mapEmbed}
                  loading="lazy"
                  className="h-[420px] w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </MotionInView>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionInView>
            <div className="max-w-2xl rounded-2xl bg-surface p-6 ring-1 ring-white/10">
              <div className="text-sm font-bold">Send a message</div>

              <form onSubmit={onSubmit} className="mt-4 space-y-4">
                <input
                  value={state.honey}
                  onChange={(e) => setState((s) => ({ ...s, honey: e.target.value }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-muted">Name</label>
                    <input
                      className="mt-1 w-full rounded-md bg-bg px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-accent/60"
                      value={state.name}
                      onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-md bg-bg px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-accent/60"
                      value={state.email}
                      onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted">Phone</label>
                  <input
                    className="mt-1 w-full rounded-md bg-bg px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-accent/60"
                    value={state.phone}
                    onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                    placeholder="07x xxx xxxx"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted">Message</label>
                  <textarea
                    className="mt-1 min-h-28 w-full rounded-md bg-bg px-3 py-2 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-accent/60"
                    value={state.message}
                    onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell us about your vehicle and what you want to do."
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted">Vehicle image (optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-1 w-full text-sm text-muted file:mr-3 file:rounded-md file:border-0 file:bg-white/5 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-text file:ring-1 file:ring-white/10"
                    onChange={(e) => setState((s) => ({ ...s, image: e.target.files?.item(0) ?? null }))}
                  />
                </div>

                <Button type="submit">
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </Button>
              </form>
            </div>
          </MotionInView>
        </Container>
      </Section>
    </>
  )
}
