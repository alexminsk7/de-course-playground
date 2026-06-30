---
name: add-component
description: Scaffold a new React component in src/components following this project's conventions (TypeScript, named export, Tailwind, accessible). Use when adding a UI component.
---

# add-component

Create a new React component that matches this repo's conventions.

## Steps
1. Read `src/components/Button.tsx` as the style reference and `CLAUDE.md` for conventions.
2. Create `src/components/<Name>.tsx`:
   - PascalCase filename, **named export** (`export function <Name>`).
   - Typed props via an `interface`, extending the native element attributes where it fits.
   - Tailwind utility classes inline; no separate CSS.
   - Accessible markup (real semantics, focus-visible ring, `type="button"` for buttons).
   - No `any`.
3. Spread native attributes (`...props`) so callers get the full element API.
4. Run `npm run build` to confirm it type-checks.

## Output
- The created file path.
- The component's props.
- A one-line usage snippet.

## Scope
- One component per invocation — no extra variants "for later".
- Do not add dependencies.
- Do not modify unrelated files — only the new component and where it's used.
