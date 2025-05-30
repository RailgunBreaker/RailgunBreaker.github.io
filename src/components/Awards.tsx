import { AwardItem } from "./awards/index";
import { Section } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Awards() {
  const { t } = useLanguage();

  return (
    <Section title={t.awards.title}>
      <div className="space-y-3 sm:space-y-4">
        {t.awards.items.map((award: string, index: number) => (
          <AwardItem key={index} award={award} />
        ))}
      </div>
    </Section>
  );
}

export default Awards;
