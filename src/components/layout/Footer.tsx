import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { site, telHref, googleMapsEmbedUrl } from '../../config/site'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  const mapHref = googleMapsEmbedUrl(site.location.mapQuery).replace('&output=embed', '')

  return (
    <footer className="border-t border-white/10 bg-bg">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-lg font-black">{site.fullName}</div>
            <p className="text-sm text-muted">{site.tagline}</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={mapHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> {site.location.addressLine}
              </a>
              <a href={telHref(site.contact.primaryPhone)} className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" /> {site.contact.displayPhones[0]}
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-bold text-text">Quick Links</div>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted">
              {site.nav.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  className={({ isActive }) =>
                    `transition hover:text-text ${isActive ? 'text-text' : 'text-muted'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-bold text-text">Social</div>
            <div className="flex items-center gap-3">
              <a
                href={site.social.facebookUrl || '#'}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!site.social.facebookUrl}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-white/10 transition hover:bg-white/5 disabled:opacity-50"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a
                href={site.social.instagramUrl || '#'}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!site.social.instagramUrl}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-white/10 transition hover:bg-white/5 disabled:opacity-50"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
            <p className="text-xs text-muted">
              Add your Facebook/Instagram URLs in <span className="text-text">src/config/site.ts</span>.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-muted">
          © {year} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
