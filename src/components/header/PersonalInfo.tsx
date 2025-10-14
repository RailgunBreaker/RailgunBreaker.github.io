import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { useLanguage } from "../../hooks/useLanguage";
import ProfilePicture from "./ProfilePicture";
import { getTranslations } from "../../assets/data/translations";

function PersonalInfo() {
  const { currentLanguage } = useLanguage();
  const t = getTranslations(currentLanguage);

  const getLanguageClass = () => {
    switch (currentLanguage) {
      case "en":
        return "lang-en";
      case "ja":
        return "lang-ja";
      case "zh":
        return "lang-zh";
      default:
        return "lang-en";
    }
  };

  return (
    <div className="names">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
        <ProfilePicture />
        <h1
          className={`name text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight ${getLanguageClass()}`}
        >
          <span className="no-wrap block">
            Railgun{" "}
            <a
              className="chem-element"
              data-element="titanium"
              href="https://en.wikipedia.org/wiki/Bromine"
            >
              Br eaker
            </a>
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-2">
            {t.header.name.hiragana && (
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-1">
                {t.header.name.hiragana}
              </span>
            )}
            ({t.header.name.main})
          </span>
        </h1>
        <div className="flex-shrink-0">
          <div className="flex flex-col gap-2">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
