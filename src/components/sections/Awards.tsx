import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const awardKeys = [
  "awards.ritsumeikanTuition2024",
  "awards.glaStudyAbroad2024",
  "awards.studyAbroadChallenge",
  "awards.ritsumeikanTuition2023",
  "awards.monbukagakusho2022",
  "awards.ritsumeikanTuition2022",
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
    <li className="group flex items-start gap-4 rounded-2xl border border-blue-200/18 bg-blue-400/6 px-5 py-4 text-lg leading-8 text-slate-200 shadow-[inset_0_1px_0_rgb(255_255_255/0.035)] transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200/45 hover:bg-blue-400/11 hover:text-white hover:shadow-[0_14px_34px_rgb(96_165_250/0.16),inset_0_1px_0_rgb(255_255_255/0.065)] sm:px-6 sm:py-5 sm:text-xl sm:leading-9">
      <span
        className="mt-3 size-2 shrink-0 rounded-full bg-blue-200 shadow-[0_0_14px_rgb(147_197_253/0.48)] transition duration-300 group-hover:bg-blue-100 group-hover:shadow-[0_0_18px_rgb(147_197_253/0.65)]"
        aria-hidden
      />
      <span className="min-w-0 wrap-break-word">{children}</span>
    </li>
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

        <ul className="flex flex-col gap-5 sm:gap-6">
          {awardKeys.map((awardKey) => (
            <AwardListItem key={awardKey}>{content[awardKey]}</AwardListItem>
          ))}
        </ul>
      </PortfolioSectionContent>
    </Section>
  );
}
