/**
 * Analytics stub.
 *
 * Wire up PostHog (or another provider) when you're ready.
 * Import from "@/lib/analytics" everywhere so the path stays stable.
 */

// import posthog from "posthog-js";
// import { env } from "@/lib/env";

export function identify(_userId: string, _traits?: Record<string, unknown>) {
  // posthog.identify(userId, traits);
}

export function track(_event: string, _properties?: Record<string, unknown>) {
  // posthog.capture(event, properties);
}

export function reset() {
  // posthog.reset();
}
