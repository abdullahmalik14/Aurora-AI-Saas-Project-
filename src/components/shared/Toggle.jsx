import { motion } from 'framer-motion'

export default function Toggle({ enabled, onChange, size = 'md' }) {
  const sizes = {
    sm: { track: 'h-5 w-9', thumb: 'h-3.5 w-3.5', translate: 16 },
    md: { track: 'h-6 w-11', thumb: 'h-4 w-4', translate: 20 },
  }

  const s = sizes[size]

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 ${s.track} ${
        enabled ? 'bg-primary' : 'bg-zinc-200'
      }`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`pointer-events-none inline-block rounded-full bg-white shadow-sm ${s.thumb}`}
        animate={{ x: enabled ? s.translate : 2 }}
        style={{ marginTop: 2 }}
      />
    </button>
  )
}
