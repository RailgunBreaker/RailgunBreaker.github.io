interface EducationEntryProps {
  period: string;
  institution: string;
  location: string;
  degree: string;
  details: string[];
}

function EducationEntry({
  period,
  institution,
  location,
  degree,
  details,
}: EducationEntryProps) {
  return (
    <article className="timeline-card timeline-card-education">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <div className="timeline-period">
            {period}
          </div>
          <div className="timeline-meta">
            {institution}, {location}
          </div>
          <div className="timeline-role">
            {degree}
          </div>
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

export default EducationEntry;
