"use client";

import type { Character, LocationPin, Project, TimelineEvent } from "@/types/app";

/** Minimal workspace shell until Agent C wires AppShell + canvas components. */
export function WorkspaceShell({
  project,
  initialPins,
  initialEvents,
  initialCharacters,
}: {
  project: Project;
  initialPins: LocationPin[];
  initialEvents: TimelineEvent[];
  initialCharacters: Character[];
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e0f] text-[#E5E7EB]">
      <header className="flex h-[52px] items-center justify-between border-b border-[#2a2a2e] px-4">
        <div>
          <h1 className="text-sm font-semibold">{project.name}</h1>
          <span className="text-xs capitalize text-[#9CA3AF]">
            {project.theme.replace(/_/g, " ")}
          </span>
        </div>
        <span className="rounded-full border border-[#2a2a2e] px-2 py-0.5 text-xs text-[#7C3AED]">
          Workspace preview
        </span>
      </header>
      <div className="flex flex-1">
        <aside className="w-[280px] border-r border-[#2a2a2e] p-4 text-xs text-[#9CA3AF]">
          <p className="mb-2 font-medium uppercase tracking-wider text-[#E5E7EB]">
            Character vault
          </p>
          <ul className="space-y-2">
            {initialCharacters.map((c) => (
              <li key={c.id} className="rounded border border-[#2a2a2e] p-2">
                {c.name}
              </li>
            ))}
            {initialCharacters.length === 0 && <li>No characters yet</li>}
          </ul>
        </aside>
        <main className="flex flex-1 flex-col">
          <div className="flex flex-1 items-center justify-center border-b border-[#2a2a2e] p-8 text-center text-sm text-[#9CA3AF]">
            <div>
              <p>Geography canvas — Agent C integrates Konva here</p>
              <p className="mt-2">{initialPins.length} location pins loaded</p>
            </div>
          </div>
          <footer className="h-[120px] border-t border-[#2a2a2e] p-3">
            <p className="mb-2 text-xs uppercase tracking-wider text-[#9CA3AF]">
              Timeline
            </p>
            <div className="flex gap-2 overflow-x-auto">
              {initialEvents.map((e) => (
                <div
                  key={e.id}
                  className="min-w-[160px] rounded-lg border border-[#2a2a2e] bg-[#1A1A1E] p-2"
                >
                  <p className="truncate text-xs font-medium">{e.title}</p>
                  <p className="text-[10px] capitalize text-[#9CA3AF]">{e.gen_status}</p>
                </div>
              ))}
              {initialEvents.length === 0 && (
                <p className="text-xs">No events yet</p>
              )}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
