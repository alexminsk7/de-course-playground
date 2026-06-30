# Project: de-course-playground

## Context
A learning playground for the "Design Engineer" course. Started as a static
Tailwind profile page (`profile.html`) and is being migrated to a React + Tailwind
component setup. Used to practice Claude Code workflows (subagents, skills, PRs).

## Tech Stack
- Build: Vite 8
- UI: React 19
- Language: TypeScript ~6 (no `any`)
- Styling: Tailwind CSS v4 (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in `src/index.css`)
- Lint: oxlint
- Package manager: npm

## File Structure
- `index.html` — Vite entry
- `profile.html` — legacy static Tailwind page (standalone, not part of the React build)
- `src/main.tsx` — React entry, renders `<App />`
- `src/App.tsx` — demo / showcase
- `src/index.css` — Tailwind import
- `src/components/Button.tsx` — reusable button (mirrors the profile "Вийти" button)
- `src/assets/`, `public/` — static assets
- `.claude/` — project agents, commands, skills

## Code Conventions
- Components: PascalCase files, **named exports** (`export function Button`), not default.
- Props: a typed `interface` extending the native element attrs (`extends ButtonHTMLAttributes<HTMLButtonElement>`).
- Variants via a `Record<Variant, string>` class map, not inline conditionals.
- Styling: Tailwind utilities inline; no per-component CSS files.
- Buttons default to `type="button"`.
- Type-only imports: `import { type X }`.

## What to do
- Small, typed, accessible components (focus-visible ring, real semantics).
- Spread native attributes (`...props`) so callers get the full element API.
- Mirror existing components (e.g. `Button`) when adding new ones.
- Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- Run `npm run build` before opening a PR.

## What NOT to do
- No `any` — type props explicitly.
- No custom/inline CSS next to Tailwind — use utilities.
- No default exports for components.
- No hard-coded one-off colors when a Tailwind class fits.
- Don't touch `profile.html` when working on React — it's a separate legacy page.
