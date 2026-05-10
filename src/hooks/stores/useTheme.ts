import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  syncSystemTheme: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const systemThemeQuery = "(prefers-color-scheme: dark)";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia(systemThemeQuery).matches ? "dark" : "light";
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(theme: ResolvedTheme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "system",
      resolvedTheme: resolveTheme("system"),
      syncSystemTheme: () => {
        if (get().theme === "system") {
          const resolvedTheme = getSystemTheme();

          applyTheme(resolvedTheme);
          set({ resolvedTheme });
        }
      },
      setTheme: (theme) => {
        const resolvedTheme = resolveTheme(theme);

        applyTheme(resolvedTheme);
        set({ theme, resolvedTheme });
      },
      toggleTheme: () => {
        const { resolvedTheme } = get();

        get().setTheme(resolvedTheme === "dark" ? "light" : "dark");
      },
    }),
    {
      name: "theme",
      partialize: (state) => ({ theme: state.theme }),
      onRehydrateStorage: () => (state) => {
        state?.setTheme(state.theme);
      },
    },
  ),
);

export function initializeTheme() {
  const state = useTheme.getState();
  const media = window.matchMedia(systemThemeQuery);

  state.setTheme(state.theme);
  media.addEventListener("change", state.syncSystemTheme);

  return () => media.removeEventListener("change", state.syncSystemTheme);
}
