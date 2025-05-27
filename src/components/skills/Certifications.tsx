import { useLanguage } from "../../hooks/useLanguage";

function Certifications() {
  const { t } = useLanguage();

  return (
    <div className="label-group2">
      <span className="header">{t.skills.certifications}</span>
      {t.skills.items.certifications.map((certification, index) => (
        <span key={index} className="label">
          <i className="fas fa-id-card" /> {certification}
        </span>
      ))}
    </div>
  );
}

export default Certifications;
