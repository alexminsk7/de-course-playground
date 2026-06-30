import { type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'default' | 'primary'
type ButtonSize = 'default' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  // Subtle bordered button (the original "Вийти" / logout style), theme-aware.
  default:
    'border border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white',
  primary: 'bg-violet-600 text-white hover:bg-violet-500',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-4 py-2.5',
  icon: 'h-9 w-9',
}

export function Button({
  variant = 'default',
  size = 'default',
  fullWidth = false,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:pointer-events-none disabled:opacity-50 ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
