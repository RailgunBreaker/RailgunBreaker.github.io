import { useLanguage } from "../../hooks/useLanguage";

function TechnologiesAndTools() {
  const { t } = useLanguage();

  return (
    <div className="label-group2">
      <span className="header">{t.skills.technologiesTools}</span>
      {t.skills.items.technologies.map((tech, index) => (
        <span key={index} className="label">
          <i className="fas fa-terminal" /> {tech}
        </span>
      ))}
    </div>
  );
}

export default TechnologiesAndTools;
