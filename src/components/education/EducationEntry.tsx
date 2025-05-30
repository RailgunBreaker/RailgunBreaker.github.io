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
    <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-lg sm:text-xl font-bold text-foreground">
          {institution}
        </h3>
        <span className="text-sm sm:text-base font-medium text-muted-foreground">
          {period}
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-sm sm:text-base text-muted-foreground">{location}</p>
        <p className="text-base sm:text-lg font-semibold text-foreground">
          {degree}
        </p>
      </div>

      {details.length > 0 && (
        <ul className="space-y-1 sm:space-y-2 ml-4">
          {details.map((detail, index) => (
            <li
              key={index}
              className="text-sm sm:text-base text-muted-foreground"
            >
              • {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EducationEntry;
