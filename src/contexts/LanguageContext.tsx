import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { getTranslations } from "../assets/data/translations";
import { Language, type Language as LanguageType } from "../types/language";
import { LanguageContext } from "./LanguageContext.ts";

interface LanguageProviderProps {
  children: ReactNode;
}

const LANGUAGE_STORAGE_KEY = "preferred-language";

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && Object.values(Language).includes(saved as LanguageType)) {
        return saved as LanguageType;
      }
    }
    return Language.EN;
  });

  const setLanguage = (language: LanguageType) => {
    setCurrentLanguage(language);
    if (typeof window !== "undefined") {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  };

  // Update localStorage when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    }
  }, [currentLanguage]);

  const t = getTranslations(currentLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
