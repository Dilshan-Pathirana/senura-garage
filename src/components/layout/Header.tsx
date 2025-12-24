import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { site, telHref, whatsappHref } from '../../config/site'
import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    'text-sm font-semibold transition hover:text-accent',
    isActive ? 'text-accent' : 'text-text/90',
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  const whatsappMessage = useMemo(
    () => `Hi Dilini Motors, I’d like to inquire about a Jeep modification.`,
    [],
  )

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="text-2xl font-heading tracking-wide">
            {site.name}
          </NavLink>
          <span className="hidden text-xs text-muted sm:inline">Jeep Modification Garage</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((l) => (
            <NavLink key={l.href} to={l.href} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={telHref(site.contact.primaryPhone)} className="no-underline">
            <Button variant="secondary">
              <Phone className="h-4 w-4" /> Call
            </Button>
          </a>
          <a
            href={whatsappHref(site.contact.primaryPhone, whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <Button>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-none p-2 ring-1 ring-border/80 hover:bg-surface md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border bg-bg">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {site.nav.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-2">
                <a href={telHref(site.contact.primaryPhone)} className="no-underline">
                  <Button variant="secondary" className="w-full">
                    <Phone className="h-4 w-4" /> Call
                  </Button>
                </a>
                <a
                  href={whatsappHref(site.contact.primaryPhone)}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  <Button className="w-full">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
