"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    setSent(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0e0e0f] px-4 font-sans text-[#E5E7EB]">
      <div className="w-full max-w-md rounded-xl border border-[#2a2a2e] bg-[#1A1A1E] p-8 shadow-xl">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">SagaSandbox</h1>
        <p className="mb-8 text-sm text-[#9CA3AF]">
          Sign in with a magic link to enter your universe.
        </p>

        {sent ? (
          <p className="rounded-lg border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-3 text-sm text-[#E5E7EB]">
            Check your email for the magic link.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#2a2a2e] bg-[#0e0e0f] px-3 py-2 text-sm text-[#E5E7EB] outline-none focus:border-[#7C3AED]"
                placeholder="you@example.com"
              />
            </label>
            {error && (
              <p className="text-sm text-[#EF4444]" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#7C3AED] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#6d28d9] disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send magic link"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
