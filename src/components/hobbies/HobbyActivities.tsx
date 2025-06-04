import { useLanguage } from "../../hooks/useLanguage";

function HobbyActivities() {
  const { t } = useLanguage();

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6">
      <div className="label-group2">
        <span className="header">{t.hobbies.categories.modelUN}</span>
        {t.hobbies.items.modelUN.map((item: string, index: number) => (
          <span key={index} className="label">
            <i className="fas fa-users" /> {item}
          </span>
        ))}
      </div>
      <div className="label-group2">
        <span className="header">{t.hobbies.categories.personalWebsite}</span>
        {t.hobbies.items.personalWebsite.map((item: string, index: number) => (
          <span key={index} className="label">
            <i className={index === 0 ? "fas fa-globe" : "fab fa-wordpress"} />{" "}
            {item}
          </span>
        ))}
      </div>
      <div className="label-group2">
        <span className="header">{t.hobbies.categories.videoClipping}</span>
        {t.hobbies.items.videoClipping.map((item: string, index: number) => (
          <span key={index} className="label">
            <i className="fas fa-film" /> {item}
          </span>
        ))}
      </div>
      <div className="label-group2">
        <span className="header">{t.hobbies.categories.badminton}</span>
        {t.hobbies.items.badminton.map((item: string, index: number) => (
          <span key={index} className="label">
            <i className={index === 0 ? "fas fa-bolt" : "fas fa-shield"} />{" "}
            {item}
          </span>
        ))}
      </div>
      <div className="label-group2">
        <span className="header">
          {t.hobbies.categories.collectingPostcards}
        </span>
        {t.hobbies.items.collectingPostcards.map(
          (item: string, index: number) => (
            <span key={index} className="label">
              <i className="fas fa-gift" /> {item}
            </span>
          )
        )}
      </div>
      <div className="label-group2">
        <span className="header">{t.hobbies.categories.photography}</span>
        {t.hobbies.items.photography.map((item: string, index: number) => (
          <span key={index} className="label">
            <i className="fas fa-camera" /> {item}
          </span>
        ))}
      </div>
      <div className="label-group2">
        <span className="header">{t.hobbies.categories.amateurRadio}</span>
        {t.hobbies.items.amateurRadio.map((item: string, index: number) => (
          <span key={index} className="label">
            <i className="fas fa-broadcast-tower" /> {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HobbyActivities;
