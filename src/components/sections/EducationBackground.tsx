import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionCard,
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const educationItems = [
  {
    dateKey: "education.waseda.date",
    metaKey: "education.waseda.meta",
    titleKey: "education.waseda.title",
    bulletKeys: ["education.waseda.bullet1", "education.waseda.bullet2"],
  },
  {
    dateKey: "education.anu.date",
    metaKey: "education.anu.meta",
    titleKey: "education.anu.title",
    bulletKeys: [
      "education.anu.bullet1",
      "education.anu.bullet2",
      "education.anu.bullet3",
    ],
  },
  {
    dateKey: "education.ritsumeikan.date",
    metaKey: "education.ritsumeikan.meta",
    titleKey: "education.ritsumeikan.title",
    bulletKeys: [
      "education.ritsumeikan.bullet1",
      "education.ritsumeikan.bullet2",
      "education.ritsumeikan.bullet3",
      "education.ritsumeikan.bullet4",
      "education.ritsumeikan.bullet5",
    ],
  },
  {
    dateKey: "education.icpsr.date",
    metaKey: "education.icpsr.meta",
    titleKey: "education.icpsr.title",
    bulletKeys: ["education.icpsr.bullet1", "education.icpsr.bullet2"],
  },
];

const educationContentRequests = [
  { sectionName: "content", contentKey: "education.title" },
  ...educationItems.flatMap((item) => [
    { sectionName: "content", contentKey: item.dateKey },
    { sectionName: "content", contentKey: item.metaKey },
    { sectionName: "content", contentKey: item.titleKey },
    ...item.bulletKeys.map((bulletKey) => ({
      sectionName: "content",
      contentKey: bulletKey,
    })),
  ]),
];

export function EducationBackground() {
  const content = useContent(educationContentRequests);

  return (
    <Section>
      <PortfolioSectionContent>
        <PortfolioSectionHeading>
          {content["education.title"]}
        </PortfolioSectionHeading>

        <div className="grid gap-6 lg:grid-cols-2">
          {educationItems.map((item) => (
            <PortfolioSectionCard key={item.titleKey}>
              <p className="text-lg font-bold text-slate-100 md:text-xl">
                {content[item.dateKey]}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-400 md:text-base">
                {content[item.metaKey]}
              </p>
              <h3 className="mt-3 text-base font-bold text-slate-200 md:text-lg">
                {content[item.titleKey]}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300 md:text-base md:leading-7">
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
