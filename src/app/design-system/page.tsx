"use client";

import { toast } from "sonner";
import { ArrowRight, Loader2, Mail, Plus, Trash2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between gap-2 border-b px-6 py-3">
        <h1 className="text-lg font-semibold">Design System</h1>
        <ThemeToggle />
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 p-6">
        {/* Colors */}
        <Section title="Colors">
          <Subsection title="Semantic tokens">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {[
                { name: "Background", className: "bg-background" },
                { name: "Foreground", className: "bg-foreground" },
                { name: "Primary", className: "bg-primary" },
                { name: "Secondary", className: "bg-secondary" },
                { name: "Muted", className: "bg-muted" },
                { name: "Accent", className: "bg-accent" },
                { name: "Destructive", className: "bg-destructive" },
                { name: "Card", className: "bg-card" },
                { name: "Popover", className: "bg-popover" },
                { name: "Border", className: "bg-border" },
                { name: "Input", className: "bg-input" },
                { name: "Ring", className: "bg-ring" },
              ].map((color) => (
                <div key={color.name} className="space-y-1.5">
                  <div
                    className={`h-10 rounded-lg ring-1 ring-foreground/10 ${color.className}`}
                  />
                  <p className="text-xs text-muted-foreground">{color.name}</p>
                </div>
              ))}
            </div>
          </Subsection>
          <Subsection title="Chart colors">
            <div className="flex gap-2">
              {(
                [
                  "bg-chart-1",
                  "bg-chart-2",
                  "bg-chart-3",
                  "bg-chart-4",
                  "bg-chart-5",
                ] as const
              ).map((bg, i) => (
                <div key={bg} className="flex-1 space-y-1.5">
                  <div
                    className={`h-10 rounded-lg ring-1 ring-foreground/10 ${bg}`}
                  />
                  <p className="text-xs text-muted-foreground">
                    Chart {i + 1}
                  </p>
                </div>
              ))}
            </div>
          </Subsection>
        </Section>

        {/* Typography */}
        <Section title="Typography">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground">Sans (Inter)</p>
              <p className="font-sans text-2xl">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                Mono (JetBrains Mono)
              </p>
              <p className="font-mono text-2xl">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Scale</p>
              <p className="text-4xl font-bold tracking-tight">Heading 1</p>
              <p className="text-3xl font-semibold tracking-tight">
                Heading 2
              </p>
              <p className="text-2xl font-semibold tracking-tight">
                Heading 3
              </p>
              <p className="text-xl font-medium">Heading 4</p>
              <p className="text-base">Body</p>
              <p className="text-sm text-muted-foreground">
                Muted / description text
              </p>
              <p className="text-xs text-muted-foreground">Caption</p>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Button">
          <Subsection title="Variants">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </Subsection>

          <Subsection title="Sizes">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </Subsection>

          <Subsection title="With icons">
            <div className="flex flex-wrap items-center gap-3">
              <Button>
                <Mail data-icon="inline-start" />
                Login with Email
              </Button>
              <Button variant="outline">
                Next
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button size="icon" variant="outline">
                <Plus />
              </Button>
              <Button size="icon-sm" variant="ghost">
                <Trash2 />
              </Button>
            </div>
          </Subsection>

          <Subsection title="States">
            <div className="flex flex-wrap items-center gap-3">
              <Button disabled>Disabled</Button>
              <Button disabled variant="outline">
                Disabled outline
              </Button>
              <Button disabled>
                <Loader2 className="animate-spin" />
                Loading
              </Button>
            </div>
          </Subsection>
        </Section>

        {/* Card */}
        <Section title="Card">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>
                  A card with header, content, and footer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here. This is the default size.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card size="sm">
              <CardHeader>
                <CardTitle>Small Card</CardTitle>
                <CardDescription>
                  The compact variant with less padding.
                </CardDescription>
                <CardAction>
                  <Button variant="ghost" size="icon-sm">
                    <Plus />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Card content with an action button in the header.</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Input */}
        <Section title="Input">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="default-input">Default</Label>
              <Input id="default-input" placeholder="Type something…" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled</Label>
              <Input
                id="disabled-input"
                placeholder="Can't type here"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-input">File</Label>
              <Input id="file-input" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="invalid-input">Invalid</Label>
              <Input
                id="invalid-input"
                aria-invalid="true"
                defaultValue="bad value"
              />
            </div>
          </div>
        </Section>

        {/* Label */}
        <Section title="Label">
          <div className="flex flex-wrap items-center gap-6">
            <Label>Default label</Label>
            <div data-disabled="true" className="group">
              <Label>Disabled label</Label>
            </div>
          </div>
        </Section>

        {/* Skeleton */}
        <Section title="Skeleton">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </Section>

        {/* Toast */}
        <Section title="Toast">
          <Subsection title="Trigger toasts">
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => toast("A simple toast message")}
              >
                Default
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.success("Action completed", {
                    description: "Your changes have been saved.",
                  })
                }
              >
                Success
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.error("Something went wrong", {
                    description: "Please try again later.",
                  })
                }
              >
                Error
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.warning("Heads up — this is a warning")}
              >
                Warning
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.info("Here's some info")}
              >
                Info
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 2000)),
                    {
                      loading: "Loading…",
                      success: "Done!",
                      error: "Failed.",
                    },
                  )
                }
              >
                Promise
              </Button>
            </div>
          </Subsection>
        </Section>
      </main>
    </div>
  );
}
