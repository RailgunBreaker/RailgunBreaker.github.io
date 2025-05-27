import { LabelGroup, Label } from "../custom-ui";
import { useLanguage } from "../../hooks/useLanguage";

function ProgrammingSkills() {
  const { t } = useLanguage();

  return (
    <LabelGroup title={t.skills.programming}>
      <Label icon="fas fa-code">Python</Label>
      <Label icon="fas fa-code">R</Label>
      <Label icon="fas fa-code">Java</Label>
      <Label icon="fas fa-code">PHP</Label>
      <Label icon="fas fa-code">HTML</Label>
      <Label icon="fas fa-code">CSS</Label>
      <Label icon="fas fa-code">Markdown</Label>
      <Label icon="fas fa-code">LaTeX</Label>
    </LabelGroup>
  );
}

export default ProgrammingSkills;
