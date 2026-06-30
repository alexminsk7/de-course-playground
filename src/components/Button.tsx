import { type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'default' | 'primary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  // Mirrors the "Вийти" logout button from profile.html.
  default: 'border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white',
  primary: 'bg-violet-600 text-white hover:bg-violet-500',
}

export function Button({
  variant = 'default',
  fullWidth = false,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:pointer-events-none disabled:opacity-50 ${fullWidth ? 'w-full' : ''} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
