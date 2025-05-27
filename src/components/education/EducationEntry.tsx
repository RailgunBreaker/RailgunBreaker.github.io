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
    <p>
      <strong>{period}</strong>
      <br />
      <em>{institution}</em>, {location}
      <br />
      <strong>{degree}</strong>
      <br />
      {details.map((detail, index) => (
        <span key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;• {detail}
          <br />
        </span>
      ))}
    </p>
  );
}

export default EducationEntry;
