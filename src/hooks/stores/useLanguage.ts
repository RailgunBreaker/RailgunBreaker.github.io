import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "zh" | "ja";

type LanguageState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

function getBrowserLanguage(): Language {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const locales = navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const locale of locales) {
    const language = locale.toLowerCase();

    if (language.startsWith("zh")) {
      return "zh";
    }

    if (language.startsWith("ja")) {
      return "ja";
    }

    if (language.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: getBrowserLanguage(),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "language",
      partialize: (state) => ({ language: state.language }),
    },
  ),
);
