import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/25',
  secondary: 'bg-white text-zinc-900 border border-border hover:bg-surface-muted',
  ghost: 'text-zinc-600 hover:text-zinc-900 hover:bg-surface-muted',
  accent: 'bg-accent text-white hover:bg-emerald-600 shadow-sm shadow-accent/25',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-primary text-primary hover:bg-primary/5',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    loading = false,
    disabled = false,
    as: Component = 'button',
    ...props
  },
  ref
) {
  const isMotion = Component === motion.button
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`

  if (isMotion) {
    return (
      <motion.button
        ref={ref}
        className={baseClass}
        disabled={disabled || loading}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </motion.button>
    )
  }

  return (
    <Component ref={ref} className={baseClass} disabled={disabled || loading} {...props}>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </Component>
  )
})

export default Button
