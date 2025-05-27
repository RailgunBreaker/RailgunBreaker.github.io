import { useLanguage } from "../../hooks/useLanguage";

function StatisticalSkills() {
  const { t } = useLanguage();

  return (
    <div className="label-group2">
      <span className="header">{t.skills.statisticalData}</span>
      {t.skills.items.statistical.map((skill, index) => (
        <span key={index} className="label">
          <i className="fas fa-chart-line" /> {skill}
        </span>
      ))}
    </div>
  );
}

export default StatisticalSkills;
