import { useLanguage } from "../../hooks/useLanguage";
import { Language } from "../../types/language";

type LanguageCode = Language;

interface LanguageInterface {
  code: LanguageCode;
  label: string;
  fullName: string;
  flag?: string;
}

function LanguageSwitch() {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages: LanguageInterface[] = [
    { code: Language.EN, label: "EN", fullName: "English", flag: "🇺🇸" },
    { code: Language.JA, label: "JP", fullName: "日本語", flag: "🇯🇵" },
    { code: Language.ZH, label: "中文", fullName: "中文", flag: "🇨🇳" },
  ];

  const handleLanguageSwitch = (langCode: LanguageCode) => {
    setLanguage(langCode);
    console.log(`Switching to ${langCode}`);
  };

  return (
    <div className="inline-flex items-center gap-0.5 bg-black/30 backdrop-blur-md rounded-lg p-0.5 border border-white/10 shadow-lg">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageSwitch(lang.code)}
          className={`
            flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md 
            transition-all duration-300 ease-out transform hover:scale-105 active:scale-95
            ${
              currentLanguage === lang.code
                ? "bg-white/90 text-gray-800 shadow-md scale-105"
                : "text-white/70 hover:text-white hover:bg-white/15"
            }
          `}
          title={`Switch to ${lang.fullName}`}
        >
          <span className="text-sm leading-none">{lang.flag}</span>
          <span className="font-semibold leading-none">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitch;
