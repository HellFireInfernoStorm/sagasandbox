export const THEMES = [
  { id: "cyberpunk_noir", label: "Cyberpunk Noir", emoji: "🌆", accent: "#06B6D4" },
  { id: "high_fantasy", label: "High Fantasy", emoji: "🏰", accent: "#B45309" },
  { id: "gritty_true_crime", label: "Gritty True Crime", emoji: "🔍", accent: "#EF4444" },
  { id: "psychological_horror", label: "Psychological Horror", emoji: "🧠", accent: "#EF4444" },
  { id: "dark_fantasy", label: "Dark Fantasy", emoji: "⚔️", accent: "#7C3AED" },
  { id: "sci_fi_noir", label: "Sci-Fi Noir", emoji: "🚀", accent: "#06B6D4" },
  { id: "lovecraftian", label: "Lovecraftian", emoji: "🐙", accent: "#7C3AED" },
  { id: "western_gothic", label: "Western Gothic", emoji: "🤠", accent: "#B45309" },
] as const;

export const AESTHETIC_STYLES = [
  "Photorealistic",
  "Watercolor",
  "Oil Painting",
  "Comic Book",
  "Neon Futuristic",
  "Pencil Sketch",
] as const;

export const GEN_STATUS_COLORS = {
  pending: "#F59E0B",
  generating: "#7C3AED",
  done: "#10B981",
  error: "#EF4444",
} as const;
