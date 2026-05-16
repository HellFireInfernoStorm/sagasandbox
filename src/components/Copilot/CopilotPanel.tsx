"use client"

import { useState } from "react"
import { MessageSquare, Send, Sparkles, X } from "lucide-react"
import { cn } from "@/lib/cn"

interface CopilotPanelProps {
  projectName: string
  className?: string
}

const PLACEHOLDER_REPLY =
  "Copilot shell is ready. Wire the agent route to analyze timeline and canvas state."

export function CopilotPanel({ projectName, className }: CopilotPanelProps) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<
    { id: string; role: "user" | "assistant"; text: string }[]
  >([])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text },
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: PLACEHOLDER_REPLY,
      },
    ])
    setInput("")
  }

  return (
    <div
      className={cn("pointer-events-none fixed bottom-4 right-4 z-40", className)}
    >
      {open ? (
        <div className="pointer-events-auto flex h-[min(420px,70vh)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-[#2a2a2e] bg-[#1a1a1e] shadow-2xl shadow-black/40">
          <header className="flex items-center justify-between border-b border-[#2a2a2e] px-3 py-2">
            <div className="flex items-center gap-2 text-sm font-medium text-[#e5e7eb]">
              <Sparkles className="h-4 w-4 text-[#7c3aed]" aria-hidden />
              Creative Copilot
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded p-1 text-[#9ca3af] hover:bg-[#252528] hover:text-white"
              aria-label="Close copilot"
            >
              <X className="h-4 w-4" />
            </button>
          </header>
          <p className="border-b border-[#2a2a2e] px-3 py-1.5 text-[10px] text-[#9ca3af]">
            {projectName} — suggestions appear as ghost nodes until approved
          </p>
          <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-3">
            {messages.length === 0 ? (
              <p className="text-xs leading-relaxed text-[#9ca3af]">
                Ask about plot holes, timeline gaps, or geography links. Major
                edits will require your approval.
              </p>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "max-w-[90%] rounded-lg px-2.5 py-1.5 text-xs leading-relaxed",
                    m.role === "user"
                      ? "ml-auto bg-[#7c3aed]/20 text-[#e5e7eb]"
                      : "mr-auto border border-[#2a2a2e] bg-[#0f0f12] text-[#9ca3af]",
                  )}
                >
                  {m.text}
                </div>
              ))
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex shrink-0 gap-2 border-t border-[#2a2a2e] p-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the copilot…"
              className="min-w-0 flex-1 rounded-md border border-[#2a2a2e] bg-[#0f0f12] px-2 py-1.5 text-xs text-white placeholder:text-[#6b7280] focus:border-[#7c3aed] focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="inline-flex items-center justify-center rounded-md bg-[#7c3aed] px-2.5 text-white disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/50 bg-[#1a1a1e] px-4 py-2 text-sm font-medium text-[#e5e7eb] shadow-lg shadow-[#7c3aed]/10 transition hover:border-[#7c3aed] hover:bg-[#252528]"
        >
          <MessageSquare className="h-4 w-4 text-[#7c3aed]" />
          Copilot
        </button>
      )}
    </div>
  )
}