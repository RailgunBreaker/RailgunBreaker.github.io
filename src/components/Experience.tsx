import { Section } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Experience() {
  const { t } = useLanguage();

  return (
    <Section title={t.experience.title}>
      <div className="space-y-6 sm:space-y-8">
        {/* Experience entries can be added here as they become available */}
        {/* Example (uncomment and import ExperienceEntry from "./experience/index"):
        <ExperienceEntry
          period="2024 – Present"
          company="Example Company"
          location="Tokyo, Japan"
          position="Position Title"
          details={[
            "Responsibility 1",
            "Responsibility 2",
          ]}
        />
        */}
        <div className="text-center text-gray-600 dark:text-gray-400 py-8">
          {/* Placeholder for when there are no entries yet */}
          Experience entries will be added here.
        </div>
      </div>
    </Section>
  );
}

export default Experience;
