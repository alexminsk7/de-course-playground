import { Profile } from './components/Profile'

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-100 text-zinc-900 dark:bg-[#0a0a0f] dark:text-zinc-200">
      {/* decorative background glows (from the original profile) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[120px]" />
      </div>
      <main className="relative flex min-h-screen items-center justify-center px-5 py-10">
        <Profile />
      </main>
    </div>
  )
}

export default App
