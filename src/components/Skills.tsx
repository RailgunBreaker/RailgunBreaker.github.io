import {
  ProgrammingSkills,
  TechnologiesAndTools,
  StatisticalSkills,
  Certifications,
} from "./skills/index";
import { Section } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Skills() {
  const { t } = useLanguage();

  return (
    <Section title={t.skills.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <ProgrammingSkills />
          <TechnologiesAndTools />
        </div>
        <div className="space-y-4 sm:space-y-6">
          <StatisticalSkills />
          <Certifications />
        </div>
      </div>
    </Section>
  );
}

export default Skills;
