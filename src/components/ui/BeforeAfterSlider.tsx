import { useId, useState } from 'react'
import type { ReactNode } from 'react'

type BeforeAfterSliderProps = {
  beforeLabel?: string
  afterLabel?: string
  before: ReactNode
  after: ReactNode
}

export function BeforeAfterSlider({
  beforeLabel = 'Before',
  afterLabel = 'After',
  before,
  after,
}: BeforeAfterSliderProps) {
  const id = useId()
  const [value, setValue] = useState(50)

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
        <div className="absolute inset-0">{after}</div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          {before}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${value}%`, transform: 'translateX(-1px)' }}
        >
          <div className="h-full w-[2px] bg-accent" />
        </div>
        <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold ring-1 ring-white/10">
          {beforeLabel}
        </div>
        <div className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold ring-1 ring-white/10">
          {afterLabel}
        </div>
      </div>

      <label className="block text-xs font-semibold text-muted" htmlFor={id}>
        Drag to compare
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-[rgb(var(--dm-accent))]"
      />
    </div>
  )
}
