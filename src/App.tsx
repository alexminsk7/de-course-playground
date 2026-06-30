import { Button } from './components/Button'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0f] p-6 text-zinc-100">
      <div className="w-full max-w-sm space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h1 className="text-lg font-semibold text-white">Button component</h1>
        <Button fullWidth>Вийти</Button>
        <Button variant="primary" fullWidth>
          Primary
        </Button>
        <div className="flex gap-2">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </main>
  )
}

export default App
