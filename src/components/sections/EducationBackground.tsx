import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionCard,
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const educationItems = [
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

        <div className="flex flex-col gap-9 sm:gap-10">
          {educationItems.map((item) => (
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
