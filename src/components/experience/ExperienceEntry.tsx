interface ExperienceEntryProps {
  period: string;
  company: string;
  location: string;
  position: string;
  details: string[];
}

function ExperienceEntry({
  period,
  company,
  location,
  position,
  details,
}: ExperienceEntryProps) {
  return (
    <article className="timeline-card timeline-card-experience">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="timeline-period">{period}</div>
          <div className="timeline-meta">
            {company}, {location}
          </div>
          <div className="timeline-role">{position}</div>
        </div>
      </div>

      {details.length > 0 && (
        <ul className="timeline-list">
          {details.map((detail, index) => (
            <li key={index} className="timeline-list-item">
              <span className="timeline-bullet">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ExperienceEntry;
