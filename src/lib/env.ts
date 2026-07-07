import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables.
   * Add variables here that should only be available on the server.
   */
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    // SUPABASE_SERVICE_ROLE_KEY: z.string(),
  },

  /**
   * Client-side environment variables.
   * Prefix with NEXT_PUBLIC_ so they're exposed to the browser.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    // NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    // NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    // NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    // NEXT_PUBLIC_POSTHOG_HOST: z.string().url(),
  },

  /**
   * Runtime values — must match the keys above.
   * Destructure from process.env so Next.js can inline them at build time.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    // NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    // NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    // NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },

  /**
   * Skip validation in edge/CI environments where env vars may not be set.
   * Set SKIP_ENV_VALIDATION=1 to bypass.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Treat empty strings as undefined so missing vars fail validation.
   */
  emptyStringAsUndefined: true,
});
