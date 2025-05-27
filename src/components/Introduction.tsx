import { Section, ContentBlock } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Introduction() {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.introduction}>
      <ContentBlock>
        &nbsp;&nbsp;&nbsp;&nbsp; {t.introduction.paragraph1}
      </ContentBlock>
      <ContentBlock>
        &nbsp;&nbsp;&nbsp;&nbsp; {t.introduction.paragraph2}
      </ContentBlock>
      <ContentBlock>
        &nbsp;&nbsp;&nbsp;&nbsp; {t.introduction.paragraph3}
      </ContentBlock>
    </Section>
  );
}

export default Introduction;
