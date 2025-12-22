import type { PropsWithChildren } from 'react'
import { X } from 'lucide-react'

type ModalProps = PropsWithChildren<{
  title?: string
  open: boolean
  onClose: () => void
}>

export function Modal({ title, open, onClose, children }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-14 w-[min(960px,calc(100%-2rem))] rounded-xl bg-surface ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <div className="font-bold">{title}</div>
          <button
            type="button"
            className="rounded-md p-2 ring-1 ring-white/10 hover:bg-white/5"
            aria-label="Close"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}
