import { create } from "zustand";
import type { GhostTimelineSuggestion, LocationPin, TimelineEvent } from "@/types/app";

export type SidebarMode = "vault" | "pin" | "export" | null;

interface UIState {
  selectedPin: LocationPin | null;
  activeEvent: TimelineEvent | null;
  sidebarMode: SidebarMode;
  /** Copilot proposals shown as semi-transparent ghost nodes until approved. */
  ghostSuggestions: GhostTimelineSuggestion[];
  setSelectedPin: (pin: LocationPin | null) => void;
  setActiveEvent: (event: TimelineEvent | null) => void;
  setSidebarMode: (mode: SidebarMode) => void;
  setGhostSuggestions: (suggestions: GhostTimelineSuggestion[]) => void;
  addGhostSuggestion: (suggestion: GhostTimelineSuggestion) => void;
  removeGhostSuggestion: (id: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedPin: null,
  activeEvent: null,
  sidebarMode: null,
  ghostSuggestions: [],
  setSelectedPin: (pin) =>
    set({
      selectedPin: pin,
      sidebarMode: pin ? "pin" : null,
    }),
  setActiveEvent: (event) => set({ activeEvent: event }),
  setSidebarMode: (mode) => set({ sidebarMode: mode }),
  setGhostSuggestions: (ghostSuggestions) => set({ ghostSuggestions }),
  addGhostSuggestion: (suggestion) =>
    set((state) => ({
      ghostSuggestions: [...state.ghostSuggestions, suggestion],
    })),
  removeGhostSuggestion: (id) =>
    set((state) => ({
      ghostSuggestions: state.ghostSuggestions.filter((g) => g.id !== id),
    })),
}));
