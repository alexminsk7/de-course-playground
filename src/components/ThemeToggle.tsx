import { useEffect, useState } from 'react'
import { Button } from './Button'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme')
  return saved === 'light' ? 'light' : 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? '☀ Light' : '☾ Dark'}
    </Button>
  )
}
