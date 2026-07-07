<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Conventions

## Tech Stack

- **Framework**: Next.js App Router (TypeScript)
- **Styling**: Tailwind CSS v4 + shadcn/ui (CSS variables, `class`-based dark mode)
- **Fonts**: Inter (sans) + JetBrains Mono (mono) via `next/font`
- **Icons**: Lucide React
- **Validation**: Zod
- **Env vars**: `@t3-oss/env-nextjs` — import only from `@/lib/env`
- **Data fetching**: TanStack Query (client-side). Prefetch on hover with `queryClient.prefetchQuery`.
- **URL state**: nuqs — `useQueryState` for filters, sort, pagination
- **Deploy target**: Vercel

## File Structure

```
src/
  app/              → routes (layout, page, loading, error)
    (auth)/         → auth route group (scaffolded, not wired)
  components/
    ui/             → shadcn components only — do not add custom code here
    [feature]/      → product components grouped by feature
  lib/
    supabase/       → Supabase client (stubbed)
    analytics.ts    → PostHog analytics (stubbed)
    env.ts          → all env vars — import only from here
    utils.ts        → cn() and shared helpers
    query-provider.tsx → TanStack Query provider
```

## Rules

### Routing & Navigation
- Always use `<Link>` from `next/link`, never raw `<a>` tags for internal navigation.

### Loading & Error States
- Every data page gets `<Suspense>` + shadcn `<Skeleton>`. No spinners.
- Every route segment gets an `error.tsx` client error boundary.
- Root `not-found.tsx` is provided.

### Imports
- Use `@/` path alias for all imports (maps to `src/`).
- Import env vars only from `@/lib/env`.
- Import `cn()` from `@/lib/utils`.

### Components
- `src/components/ui/` is shadcn-managed — do not manually edit files here.
- Product components go in `src/components/[feature]/`.
- Prefer composition over prop drilling.

### Styling
- Use Tailwind utility classes. Avoid custom CSS unless absolutely necessary.
- Dark mode via `class` strategy — use `dark:` variants.
- Use CSS variables from shadcn theme for colors (e.g., `bg-background`, `text-foreground`).

### Data Fetching
- Server components for initial data loads.
- TanStack Query for all client-side data fetching and caching.
- Colocate query keys near the fetcher functions.

### Forms & Validation
- Use Zod schemas for all form validation and API response validation.

### Testing (when added)
- Vitest + React Testing Library, jsdom environment.
- Test behavior, not implementation details.
- Test files colocated with source: `*.test.ts(x)`.

## Dev Scripts

- `npm run dev` — start dev server
- `npm run build` — production build (fails on type errors and missing env vars)
- `npm run lint` — ESLint
- `npm run check:deps` — Knip unused file/dependency detection
- `npm run build-stats` — bundle analyzer
