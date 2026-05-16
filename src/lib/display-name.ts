/** Resolve a human label for cursors and presence (never expose raw user ids in UI). */
export function resolveDisplayName(
  displayName: string | null | undefined,
  userId: string,
  options?: { selfUserId?: string },
): string {
  const trimmed = displayName?.trim()
  if (trimmed) return trimmed
  if (options?.selfUserId && userId === options.selfUserId) return "You"
  if (userId === "local" || userId === "demo-user") return "Guest"
  return `Collaborator ${userId.slice(0, 6)}`
}
