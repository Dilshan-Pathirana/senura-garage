import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MotionInView } from '../components/ui/MotionInView'
import { Button } from '../components/ui/Button'
import { site } from '../config/site'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

type Testimonial = {
  name: string
  rating: number
  text: string
}

export function Testimonials() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        name: 'Customer',
        rating: 5,
        text: 'Add your real customer reviews here in code (or later via CMS).',
      },
      {
        name: 'Customer',
        rating: 5,
        text: 'This is a placeholder review card to match the SRS layout requirement.',
      },
      {
        name: 'Customer',
        rating: 5,
        text: 'Replace these with actual reviews and photos when available.',
      },
    ],
    [],
  )

  const [idx, setIdx] = useState(0)
  const current = testimonials[idx]

  return (
    <>
      <Seo
        title={`Testimonials | ${site.fullName}`}
        description="Customer reviews and ratings for Dilini Motors Jeep modifications and repairs."
      />

      <Section>
        <Container>
          <MotionInView>
            <h1 className="text-3xl font-black">Testimonials</h1>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Carousel-style reviews with star ratings.
            </p>

            <div className="mt-8 rounded-2xl bg-surface p-6 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-extrabold">{current.name}</div>
                  <div className="mt-1 flex items-center gap-1 text-accent">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setIdx((v) => (v - 1 + testimonials.length) % testimonials.length)}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setIdx((v) => (v + 1) % testimonials.length)}
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted">{current.text}</p>
              <p className="mt-4 text-xs text-muted">
                Replace testimonial content in <span className="text-text">src/pages/Testimonials.tsx</span>.
              </p>
            </div>
          </MotionInView>
        </Container>
      </Section>
    </>
  )
}
