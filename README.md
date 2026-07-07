# Boilerplate

Next.js boilerplate with TypeScript, Tailwind CSS v4, and shadcn/ui.

## Getting Started

```bash
# Install dependencies
npm install

# Copy env vars
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js** App Router (TypeScript)
- **Tailwind CSS v4** + **shadcn/ui**
- **Zod** — runtime validation
- **TanStack Query** — client-side data fetching
- **nuqs** — URL state management
- **Lucide React** — icons
- **next-themes** — dark mode

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run check:deps` | Knip unused dependency detection |
| `npm run build-stats` | Bundle analyzer |

## Stubs (not active)

- **Supabase** — `src/lib/supabase/client.ts`
- **Analytics** — `src/lib/analytics.ts` (PostHog)

Uncomment in `src/lib/env.ts` and the stub files when ready.

## File Structure

```
src/
  app/              → routes (layout, page, loading, error)
    (auth)/         → auth route group (scaffolded)
  components/
    ui/             → shadcn components
    [feature]/      → product components
  lib/
    supabase/       → Supabase client stub
    analytics.ts    → analytics stub
    env.ts          → type-safe env vars
    utils.ts        → cn() and helpers
```
