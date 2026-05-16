"use client"

import { History } from "lucide-react"

interface TimeTravelScrubberProps {
  /** 0 = oldest snapshot, length = newest (UI shell — wire to project_snapshots later). */
  snapshotCount?: number
  value?: number
  onChange?: (index: number) => void
  disabled?: boolean
}

export function TimeTravelScrubber({
  snapshotCount = 0,
  value = 0,
  onChange,
  disabled = false,
}: TimeTravelScrubberProps) {
  const max = Math.max(0, snapshotCount - 1)
  const atLatest = snapshotCount === 0 || value >= max

  return (
    <div
      className="flex min-w-0 max-w-[280px] items-center gap-2 rounded-lg border border-[#2a2a2e] bg-[#1a1a1e] px-2 py-1"
      title="Version history (time-travel)"
    >
      <History className="h-3.5 w-3.5 shrink-0 text-[#9ca3af]" aria-hidden />
      <input
        type="range"
        min={0}
        max={max}
        value={Math.min(value, max)}
        disabled={disabled || snapshotCount === 0}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="h-1 min-w-0 flex-1 cursor-pointer accent-[#7c3aed] disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Scrub project version history"
      />
      <span className="shrink-0 font-mono text-[10px] text-[#9ca3af]">
        {snapshotCount === 0
          ? "No history"
          : atLatest
            ? "Now"
            : `v${value + 1}/${snapshotCount}`}
      </span>
    </div>
  )
}

