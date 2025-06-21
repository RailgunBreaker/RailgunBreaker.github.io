import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_STORAGE_KEY = "preferred-theme";

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize theme from localStorage or default to light
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && (saved === "light" || saved === "dark")) {
        return saved as Theme;
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      document.documentElement.className = newTheme;
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Update localStorage and document when theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      document.documentElement.className = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
