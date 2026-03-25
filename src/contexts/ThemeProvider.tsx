import { useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme: Theme = "dark";

  const setTheme = (_newTheme: Theme) => {};

  const toggleTheme = () => {};

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.className = "dark";
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
