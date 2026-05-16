import { createBrowserClient } from "@supabase/ssr";

import { isSupabaseConfigured } from "@/lib/supabase-env";

export { isSupabaseConfigured };

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://example.invalid",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "anon-key-not-configured",
  );
}
