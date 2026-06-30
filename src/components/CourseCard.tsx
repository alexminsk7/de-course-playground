type Accent = 'violet' | 'emerald'

interface CourseCardProps {
  code: string
  title: string
  subtitle: string
  accent: Accent
  badge?: string
}

const accentStyles: Record<Accent, { glow: string; code: string; badge: string }> = {
  violet: {
    glow: 'bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.5),transparent_70%)]',
    code: 'text-violet-500 dark:text-violet-400',
    badge: 'bg-violet-500/15 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300',
  },
  emerald: {
    glow: 'bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.45),transparent_70%)]',
    code: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  },
}

export function CourseCard({ code, title, subtitle, accent, badge = 'Куплено' }: CourseCardProps) {
  const a = accentStyles[accent]
  return (
    <div className="relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-[#111018]">
      <div className={`absolute inset-0 ${a.glow}`} />
      <span className={`absolute right-3 top-5 rounded-full px-2.5 py-1 text-[11px] font-medium ${a.badge}`}>
        {badge}
      </span>
      <p className={`relative text-2xl font-extrabold leading-none ${a.code}`}>{code}</p>
      <div className="relative">
        <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      </div>
    </div>
  )
}
