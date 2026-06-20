import { FaLanguage } from "react-icons/fa";
import { useContent } from "../../hooks/useContent";
import { type Language, useLanguage } from "../../hooks/stores/useLanguage";

const languageOptions: Language[] = ["en", "zh", "ja"];

const languageContentRequests = [
  { sectionName: "content", contentKey: "languageSelector.label" },
  { sectionName: "content", contentKey: "languageSelector.en" },
  { sectionName: "content", contentKey: "languageSelector.zh" },
  { sectionName: "content", contentKey: "languageSelector.ja" },
  { sectionName: "content", contentKey: "languageSelector.enShort" },
  { sectionName: "content", contentKey: "languageSelector.zhShort" },
  { sectionName: "content", contentKey: "languageSelector.jaShort" },
];

export function LanguageSelector() {
  const language = useLanguage((state) => state.language);
  const setLanguage = useLanguage((state) => state.setLanguage);
  const content = useContent(languageContentRequests);

  return (
    <div
      aria-label={content["languageSelector.label"]}
      className="inline-flex max-w-full items-center gap-1 rounded-full border border-sky-200/20 bg-slate-950/35 p-1 shadow-[0_10px_30px_rgb(0_0_0/0.2)] backdrop-blur-md"
      role="group"
    >
      <FaLanguage
        className="ml-2 hidden size-4 shrink-0 text-sky-100/80 sm:block"
        aria-hidden
      />
      <div className="flex items-center gap-1">
        {languageOptions.map((languageOption) => {
          const isSelected = language === languageOption;

          return (
            <button
              key={languageOption}
              aria-label={content[`languageSelector.${languageOption}`]}
              aria-pressed={isSelected}
              className={`h-8 min-w-11 rounded-full px-3 text-sm font-bold transition duration-200 ease-out outline-none hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:translate-y-0 ${
                isSelected
                  ? "bg-cyan-300 text-slate-950 shadow-[0_8px_18px_rgb(34_211_238/0.22)]"
                  : "bg-transparent text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
              type="button"
              onClick={() => {
                setLanguage(languageOption);
              }}
            >
              {content[`languageSelector.${languageOption}Short`]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
