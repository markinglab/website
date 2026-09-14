# Copilot Instructions for MarkingLab Website

Public marketing/landing page for Marking Lab. Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui, deployed to GitHub Pages.

## Commands

```sh
npm install          # dependencies are not pre-installed; run this first
npm run dev          # start dev server at http://localhost:8080
npm run build        # production build to dist/
npm run build:dev    # development-mode build (unminified, useful for debugging build issues)
npm run lint         # ESLint over the whole repo (no separate typecheck script; tsc runs as part of build)
npm run test         # vitest run (single run, all tests)
npm run test:watch   # vitest in watch mode
npm run deploy       # publishes dist/ to the gh-pages branch via gh-pages package
```

To run a single test file or test name with vitest:
```sh
npx vitest run src/path/to/file.test.tsx
npx vitest run -t "test name substring"
```

There are currently no test files in the repo; `vitest.config.ts` expects specs matching `src/**/*.{test,spec}.{ts,tsx}` and a setup file at `src/test/setup.ts` (create this setup file if you add the first test that needs jsdom globals/matchers).

Deployment: never commit the `dist/` folder to a normal branch (it's gitignored); `npm run deploy` pushes it to `gh-pages` automatically.

## Architecture

- `src/App.tsx` — app shell: wraps everything in `QueryClientProvider` (TanStack Query), `TooltipProvider`, and both toast systems (`Toaster` from `components/ui/toaster` and `Sonner` from `components/ui/sonner`) mounted simultaneously. Routing is `react-router-dom` with `BrowserRouter`; add new routes above the catch-all `*` → `NotFound` route.
- `src/pages/` — route-level components only (currently `Index.tsx`, `NotFound.tsx`). `Index.tsx` is a thin composition of landing section components in display order.
- `src/components/landing/` — one component per page section (`Header`, `Hero`, `Features`, `HowItWorks`, `Stats`, `Pricing`, `CTA`, `Footer`). Sections are self-contained and composed in `Index.tsx`; add new sections here and wire them into `Index.tsx`.
- `src/components/ui/` — shadcn/ui primitives (button, card, toast, tooltip, sonner, etc.). This is the generated shadcn output — prefer adding new primitives via the shadcn CLI (`npx shadcn add <component>`) rather than hand-writing them, so they stay consistent with `components.json` config (aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`).
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) used throughout for conditional className composition.
- `src/hooks/use-toast.ts` — shared toast state/hook backing both toaster components.
- Path alias `@/*` maps to `src/*` (configured in `tsconfig.json`, `vite.config.ts`, and `vitest.config.ts` — keep these in sync if the alias changes).

## Conventions

- Styling follows `CSS_STYLE_GUIDE.md` at the repo root — a detailed design system spec (colors, typography, spacing, shadows, animations) implemented via Tailwind config + CSS variables in `src/index.css`. Consult it before introducing new colors, fonts, or spacing values; prefer existing CSS variables/Tailwind tokens (e.g. `text-foreground`, `text-muted-foreground`, `bg-background`) over hardcoded hex/HSL values.
- Primary brand color is dark navy (`hsl(212, 67%, 17%)`); secondary/muted is light gray (`hsl(0, 0%, 96%)`). Dark mode variants are defined in the same guide.
- Headings use `Space Grotesk`; body text uses `Inter`.
- ESLint config (`eslint.config.js`) has `@typescript-eslint/no-unused-vars` turned off and `react-refresh/only-export-components` as a warning — don't re-enable these without checking for widespread violations first.
- Both `bun.lockb` and `package-lock.json` are present; check which one is up to date before adding dependencies, and update the corresponding lockfile.
