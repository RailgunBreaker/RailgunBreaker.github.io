import { ExperienceEntry } from "./experience/index";
import { Section } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Experience() {
  const { t } = useLanguage();

  return (
    <Section title={t.experience.title}>
      <div className="space-y-6 sm:space-y-8">
        <ExperienceEntry
          period="May 2025 – Present"
          company="Ritsumeikan University"
          location="Osaka, Japan"
          position={t.experience.entries.researchAssistant.position}
          details={t.experience.entries.researchAssistant.details}
        />
        <ExperienceEntry
          period="October 2025 – November 2025"
          company="ANA Kansai Airport Co., Ltd."
          location="Osaka, Japan"
          position={t.experience.entries.anaInternship.position}
          details={t.experience.entries.anaInternship.details}
        />
        <ExperienceEntry
          period="2010 – Present"
          company="Freelance"
          location="Worldwide"
          position={t.experience.entries.photographer.position}
          details={t.experience.entries.photographer.details}
        />
        <ExperienceEntry
          period="March 2022 – Present"
          company="Independent"
          location="Global Markets"
          position={t.experience.entries.stockInvestor.position}
          details={t.experience.entries.stockInvestor.details}
        />
        <ExperienceEntry
          period="March 2024"
          company="Taiko no Tatsujin Championship"
          location="Australian Capital Territory, Australia"
          position={t.experience.entries.taikoChampionship.position}
          details={t.experience.entries.taikoChampionship.details}
        />
      </div>
    </Section>
  );
}

export default Experience;
