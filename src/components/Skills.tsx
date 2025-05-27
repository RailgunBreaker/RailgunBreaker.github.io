import {
  ProgrammingSkills,
  TechnologiesAndTools,
  StatisticalSkills,
  Certifications,
} from "./skills/index";
import { Section, GridContainer, GridColumn } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Skills() {
  const { t } = useLanguage();

  return (
    <Section title={t.skills.title}>
      <GridContainer>
        <GridColumn>
          <ProgrammingSkills />
          <TechnologiesAndTools />
          <StatisticalSkills />
          <Certifications />
        </GridColumn>
      </GridContainer>
    </Section>
  );
}

export default Skills;
