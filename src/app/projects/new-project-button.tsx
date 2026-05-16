"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AESTHETIC_STYLES, THEMES } from "@/lib/constants";

export function NewProjectButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState<string>(THEMES[4].id);
  const [style, setStyle] = useState<string>(AESTHETIC_STYLES[2]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCreate() {
    if (!name.trim()) return;
    setLoading(true);
    setError(null);

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        theme,
        aesthetic_style: style.toLowerCase().replace(/\s+/g, "_"),
      }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Failed to create project");
      return;
    }

    const { project } = await res.json();
    setOpen(false);
    router.push(`/projects/${project.id}`);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg bg-[#7C3AED] px-4 py-2 text-sm font-medium text-white hover:bg-[#6d28d9]"
      >
        New Project
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-xl border border-[#2a2a2e] bg-[#1A1A1E] p-6 text-[#E5E7EB]">
            <h2 className="mb-4 text-lg font-semibold">Create universe</h2>
            <label className="mb-4 block text-xs uppercase tracking-wider text-[#9CA3AF]">
              Project name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#2a2a2e] bg-[#0e0e0f] px-3 py-2 text-sm"
                placeholder="The Obsidian Covenant"
              />
            </label>
            <p className="mb-2 text-xs uppercase tracking-wider text-[#9CA3AF]">Theme</p>
            <div className="mb-4 grid max-h-40 grid-cols-2 gap-2 overflow-y-auto">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  className={`rounded-lg border px-2 py-2 text-left text-xs ${
                    theme === t.id
                      ? "border-[#7C3AED] bg-[#7C3AED]/10"
                      : "border-[#2a2a2e]"
                  }`}
                >
                  {t.emoji} {t.label}
                </button>
              ))}
            </div>
            <p className="mb-2 text-xs uppercase tracking-wider text-[#9CA3AF]">Aesthetic</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {AESTHETIC_STYLES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStyle(s)}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    style === s ? "border-[#7C3AED] text-[#7C3AED]" : "border-[#2a2a2e]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && <p className="mb-2 text-sm text-[#EF4444]">{error}</p>}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-[#2a2a2e] px-4 py-2 text-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={loading || !name.trim()}
                onClick={handleCreate}
                className="rounded-lg bg-[#7C3AED] px-4 py-2 text-sm text-white disabled:opacity-50"
              >
                {loading ? "Creating…" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
