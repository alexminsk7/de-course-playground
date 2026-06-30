import { Button } from './Button'
import { CourseCard } from './CourseCard'
import { ThemeToggle } from './ThemeToggle'

const courses = [
  { code: 'DE', title: 'Design Engineer', subtitle: 'React + AI + Storybook.', accent: 'violet' as const },
  { code: 'DS', title: 'Дизайн-система + AI', subtitle: 'Токени, Figma Variables → код.', accent: 'emerald' as const },
]

const links = [
  { href: 'https://github.com/alexminsk7', label: 'github.com/alexminsk7' },
  { href: 'https://t.me/beMinimalis_t', label: 't.me/beMinimalis_t' },
  { href: 'https://www.linkedin.com/in/aliaksandr-lisouski', label: 'in/aliaksandr-lisouski' },
]

export function Profile() {
  return (
    <section className="w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center gap-4">
        <img
          src="https://github.com/alexminsk7.png"
          alt="Aliaksandr Lisouski"
          className="h-16 w-16 rounded-full border border-zinc-200 object-cover dark:border-white/10"
        />
        <div className="min-w-0">
          <p className="text-lg font-semibold text-zinc-900 dark:text-white">Aliaksandr Lisouski</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Mobile Designer · UX/UI Designer · Design Engineer
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Учень UX Hero</p>
        </div>
        <div className="ml-auto self-start">
          <ThemeToggle />
        </div>
      </div>

      <div className="my-6 border-t border-zinc-200 dark:border-white/10" />

      <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">Курси</p>
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {courses.map((c) => (
          <CourseCard key={c.code} {...c} />
        ))}
      </div>

      <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">Лінки</p>
      <div className="flex gap-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100 px-3 py-2 text-center text-xs text-zinc-700 transition hover:bg-zinc-200 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </div>

      <Button fullWidth className="mt-6">
        Вийти
      </Button>
    </section>
  )
}
