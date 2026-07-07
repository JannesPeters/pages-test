import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-end gap-2 border-b px-6 py-3">
        <ThemeToggle />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Boilerplate</h1>
        <p className="max-w-md text-muted-foreground">
          Next.js&nbsp;+&nbsp;TypeScript&nbsp;+&nbsp;Tailwind&nbsp;CSS&nbsp;+&nbsp;shadcn/ui.
          Fork&nbsp;this repo and start building.
        </p>
      </main>
    </div>
  );
}
