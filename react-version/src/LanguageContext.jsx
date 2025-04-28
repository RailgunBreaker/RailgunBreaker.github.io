import { createContext, useState, useContext } from 'react';
import { translations } from './translations';

// Create a context for language
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default language is English
  
  // Function to toggle language between English and Japanese
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ja' : 'en');
  };
  
  // Get translations for the current language
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}