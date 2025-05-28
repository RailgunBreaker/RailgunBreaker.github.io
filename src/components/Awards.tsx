import { AwardItem } from "./awards/index";
import { Section, ContentBlock } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Awards() {
  const { t } = useLanguage();

  return (
    <Section title={t.awards.title}>
      <ContentBlock>
        {t.awards.items.map((award: string, index: number) => (
          <AwardItem key={index} award={award} />
        ))}
      </ContentBlock>
    </Section>
  );
}

export default Awards;
