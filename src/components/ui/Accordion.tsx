import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

type Item = {
  question: string
  answer: string
}

type AccordionProps = {
  items: Item[]
}

export function Accordion({ items }: AccordionProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        const buttonId = `${baseId}-btn-${idx}`
        const panelId = `${baseId}-panel-${idx}`

        return (
          <div key={item.question} className="rounded-xl bg-surface ring-1 ring-white/10">
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
            >
              <span className="font-bold">{item.question}</span>
              <ChevronDown className={cn('h-5 w-5 text-muted transition', isOpen && 'rotate-180')} />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn('grid overflow-hidden px-5 transition-all', isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]')}
            >
              <div className="min-h-0 text-sm text-muted">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
