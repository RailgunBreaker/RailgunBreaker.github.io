import { EducationEntry, CVDownload } from "./education/index";
import { Section } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function EducationBackground() {
  const { t } = useLanguage();

  return (
    <Section title={t.education.title}>
      <div className="space-y-6 sm:space-y-8">
        <EducationEntry
          period="2023 – 2026"
          institution="Australian National University"
          location="Canberra, Australia"
          degree={t.education.entries.anu.degree}
          details={t.education.entries.anu.details}
        />
        <EducationEntry
          period="2022 – 2026"
          institution="Ritsumeikan University"
          location="Osaka, Japan"
          degree={t.education.entries.ritsumeikan.degree}
          details={t.education.entries.ritsumeikan.details}
        />
        <EducationEntry
          period="2024.6 – 2024.7"
          institution="University of Michigan"
          location="Ann Arbor, MI, USA"
          degree={t.education.entries.michigan.degree}
          details={t.education.entries.michigan.details}
        />
        <CVDownload />
      </div>
    </Section>
  );
}

export default EducationBackground;
