import LanguageSwitch from "./LanguageSwitch";
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
    <div className="hero-top">
      <div className="hero-identity-wrap">
        <ProfilePicture />
        <div className="hero-title-wrap">
          <h1 className={`name hero-name ${getLanguageClass()}`}>
            <span className="block sm:whitespace-nowrap">
              Railgun{" "}
              <a
                className="chem-element"
                data-element="titanium"
                href="https://en.wikipedia.org/wiki/Bromine"
              >
                Br eaker
              </a>
            </span>
            <span className="hero-name-subtitle">
              {t.header.name.hiragana && (
                <span className="hero-name-hiragana">{t.header.name.hiragana}</span>
              )}
              <span>({t.header.name.main})</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="hero-controls" role="group" aria-label="Language controls">
        <div className="flex flex-col gap-2">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
