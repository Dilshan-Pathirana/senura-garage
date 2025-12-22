import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MotionInView } from '../components/ui/MotionInView'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider'
import { site } from '../config/site'

type Category = 'All' | 'Modifications' | 'Repairs' | 'Builds'

type GalleryItem = {
  id: string
  category: Exclude<Category, 'All'>
  title: string
  caption: string
}

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgb(var(--dm-accent)/0.25),transparent_55%),linear-gradient(to_bottom,rgb(var(--dm-surface)),rgb(var(--dm-bg)))]">
      <div className="rounded-md bg-black/50 px-3 py-2 text-xs font-semibold ring-1 ring-white/10">
        {label}
      </div>
    </div>
  )
}

export function Gallery() {
  const items: GalleryItem[] = useMemo(
    () => [
      {
        id: 'g1',
        category: 'Builds',
        title: 'Toyota Land Cruiser 80 Series',
        caption: 'Lifted & Rebuilt',
      },
      {
        id: 'g2',
        category: 'Modifications',
        title: 'Jeep Suspension Lift',
        caption: 'Lift kit + fitment',
      },
      {
        id: 'g3',
        category: 'Repairs',
        title: 'Gearbox Service',
        caption: 'Diagnostics + repair',
      },
      {
        id: 'g4',
        category: 'Modifications',
        title: 'Off-road Protection',
        caption: 'Protection + durability',
      },
      {
        id: 'g5',
        category: 'Repairs',
        title: 'Electrical & Wiring',
        caption: 'Troubleshooting + fixes',
      },
      {
        id: 'g6',
        category: 'Builds',
        title: 'Performance Setup',
        caption: 'Exhaust + tuning',
      },
    ],
    [],
  )

  const categories: Category[] = ['All', 'Modifications', 'Repairs', 'Builds']
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  const [openId, setOpenId] = useState<string | null>(null)
  const openItem = filtered.find((i) => i.id === openId) ?? null

  return (
    <>
      <Seo
        title={`Gallery | ${site.fullName}`}
        description="Browse recent Jeep modifications, repairs, and builds. Includes before/after comparisons and lightbox viewing."
      />

      <Section>
        <Container>
          <MotionInView>
            <h1 className="text-3xl font-black">Gallery</h1>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Categorized portfolio with lightbox viewing. Replace placeholders with your real project photos and
              videos.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((c) => (
                <Button key={c} variant={active === c ? 'primary' : 'secondary'} onClick={() => setActive(c)}>
                  {c}
                </Button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((i) => (
                <button
                  key={i.id}
                  type="button"
                  onClick={() => setOpenId(i.id)}
                  className="overflow-hidden rounded-xl bg-surface text-left ring-1 ring-white/10 transition hover:bg-white/5"
                >
                  <div className="h-44">
                    <PlaceholderImage label={`${i.category}`} />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-extrabold">{i.title}</div>
                    <div className="mt-1 text-xs text-muted">{i.caption}</div>
                  </div>
                </button>
              ))}
            </div>
          </MotionInView>
        </Container>
      </Section>

      <Section className="bg-surface/40">
        <Container>
          <MotionInView>
            <h2 className="text-2xl font-black">Before & After</h2>
            <p className="mt-2 text-sm text-muted">A simple comparison slider (replace with real before/after photos).</p>

            <div className="mt-6 max-w-3xl">
              <BeforeAfterSlider
                before={<PlaceholderImage label="Before" />}
                after={<PlaceholderImage label="After" />}
              />
            </div>
          </MotionInView>
        </Container>
      </Section>

      <Modal
        open={!!openItem}
        onClose={() => setOpenId(null)}
        title={openItem ? `${openItem.title} – ${openItem.caption}` : undefined}
      >
        {openItem ? (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
              <div className="h-72">
                <PlaceholderImage label="Lightbox Preview" />
              </div>
            </div>
            <div className="text-sm text-muted">Category: {openItem.category}</div>
          </div>
        ) : null}
      </Modal>
    </>
  )
}
