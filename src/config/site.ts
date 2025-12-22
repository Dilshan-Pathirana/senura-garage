export type SiteLink = { label: string; href: string }

export const site = {
  name: 'Dilini Motors',
  fullName: 'Dilini Motors – Jeep Modification Garage',
  tagline: 'Premium Jeep Modifications & Custom Off-Road Builds in Sri Lanka',
  location: {
    addressLine: 'Kalotuwawa, Nittambuwa, Sri Lanka',
    mapQuery: 'Dilini Motors Kalotuwawa Nittambuwa Sri Lanka',
  },
  contact: {
    phones: ['0776007883', '0762700165'],
    displayPhones: ['077 600 7883', '076 270 0165'],
    primaryPhone: '0776007883',
  },
  social: {
    facebookUrl: '',
    instagramUrl: '',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ] satisfies SiteLink[],
} as const

export function telHref(phoneDigitsOnly: string) {
  return `tel:${phoneDigitsOnly}`
}

export function whatsappHref(phoneDigitsOnly: string, message?: string) {
  const normalized = phoneDigitsOnly.replace(/^0/, '94')
  const base = `https://wa.me/${normalized}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function googleMapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}
