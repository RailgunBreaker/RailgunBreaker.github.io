import {
  ProgrammingSkills,
  TechnologiesAndTools,
  StatisticalSkills,
  Certifications,
} from "./skills/index";
import { Section, GridContainer, GridColumn } from "./custom-ui";

function Skills() {
  return (
    <Section title="Skills">
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
