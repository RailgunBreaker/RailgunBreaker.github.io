import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionCard,
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const awardKeys = [
  "awards.ritsumeikanTuition2022To2026",
  "awards.glaStudyAbroad2024",
  "awards.studyAbroadChallenge",
  "awards.monbukagakusho2022",
  "awards.ucr2022",
];

const awardsContentRequests = [
  { sectionName: "content", contentKey: "awards.title" },
  ...awardKeys.map((awardKey) => ({
    sectionName: "content",
    contentKey: awardKey,
  })),
];

type AwardListItemProps = {
  children: string;
};

function AwardListItem({ children }: AwardListItemProps) {
  return (
    <PortfolioSectionCard
      as="li"
      className="flex items-start gap-3 text-sm leading-7 md:text-base"
    >
      <span
        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sky-300"
        aria-hidden
      />
      <span className="min-w-0 wrap-break-word">{children}</span>
    </PortfolioSectionCard>
  );
}

export function Awards() {
  const content = useContent(awardsContentRequests);

  return (
    <Section>
      <PortfolioSectionContent>
        <PortfolioSectionHeading>
          {content["awards.title"]}
        </PortfolioSectionHeading>

        <ul className="grid gap-3 md:grid-cols-2">
          {awardKeys.map((awardKey) => (
            <AwardListItem key={awardKey}>{content[awardKey]}</AwardListItem>
          ))}
        </ul>
      </PortfolioSectionContent>
    </Section>
  );
}
