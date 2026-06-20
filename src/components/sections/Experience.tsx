import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionCard,
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const experienceItems = [
  {
    dateKey: "experience.research.date",
    metaKey: "experience.research.meta",
    titleKey: "experience.research.title",
    bulletKeys: ["experience.research.bullet1"],
  },
  {
    dateKey: "experience.ana.date",
    metaKey: "experience.ana.meta",
    titleKey: "experience.ana.title",
    bulletKeys: ["experience.ana.bullet1", "experience.ana.bullet2"],
  },
  {
    dateKey: "experience.photographer.date",
    metaKey: "experience.photographer.meta",
    titleKey: "experience.photographer.title",
    bulletKeys: [
      "experience.photographer.bullet1",
      "experience.photographer.bullet2",
      "experience.photographer.bullet3",
    ],
  },
  {
    dateKey: "experience.investor.date",
    metaKey: "experience.investor.meta",
    titleKey: "experience.investor.title",
    bulletKeys: ["experience.investor.bullet1", "experience.investor.bullet2"],
  },
  {
    dateKey: "experience.taiko.date",
    metaKey: "experience.taiko.meta",
    titleKey: "experience.taiko.title",
    bulletKeys: ["experience.taiko.bullet1"],
  },
];

const experienceContentRequests = [
  { sectionName: "content", contentKey: "experience.title" },
  ...experienceItems.flatMap((item) => [
    { sectionName: "content", contentKey: item.dateKey },
    { sectionName: "content", contentKey: item.metaKey },
    { sectionName: "content", contentKey: item.titleKey },
    ...item.bulletKeys.map((bulletKey) => ({
      sectionName: "content",
      contentKey: bulletKey,
    })),
  ]),
];

export function Experience() {
  const content = useContent(experienceContentRequests);

  return (
    <Section>
      <PortfolioSectionContent>
        <PortfolioSectionHeading>
          {content["experience.title"]}
        </PortfolioSectionHeading>

        <div className="flex flex-col gap-9 sm:gap-10">
          {experienceItems.map((item) => (
            <PortfolioSectionCard key={item.titleKey}>
              <p className="text-xl font-bold text-slate-100 sm:text-2xl">
                {content[item.dateKey]}
              </p>
              <p className="mt-3 text-base font-semibold text-slate-400 sm:text-lg">
                {content[item.metaKey]}
              </p>
              <h3 className="mt-4 text-lg font-bold text-slate-200 sm:text-xl">
                {content[item.titleKey]}
              </h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                {item.bulletKeys.map((bulletKey) => (
                  <li key={bulletKey}>{content[bulletKey]}</li>
                ))}
              </ul>
            </PortfolioSectionCard>
          ))}
        </div>
      </PortfolioSectionContent>
    </Section>
  );
}
