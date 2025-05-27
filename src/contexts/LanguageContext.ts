import { createContext } from "react";
import type { Translations } from "../lib/translations";
import type { Language } from "../types/language";

export interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
