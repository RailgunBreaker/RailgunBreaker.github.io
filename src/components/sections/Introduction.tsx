import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionCard,
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const introductionContentRequests = [
  { sectionName: "content", contentKey: "introduction.title" },
  { sectionName: "content", contentKey: "introduction.academic" },
  { sectionName: "content", contentKey: "introduction.research" },
  { sectionName: "content", contentKey: "introduction.personal" },
];

const paragraphKeys = [
  "introduction.academic",
  "introduction.research",
  "introduction.personal",
];

export function Introduction() {
  const content = useContent(introductionContentRequests);

  return (
    <Section>
      <PortfolioSectionContent gap="wide">
        <PortfolioSectionHeading>
          {content["introduction.title"]}
        </PortfolioSectionHeading>

        <div className="flex flex-col gap-10 sm:gap-14">
          {paragraphKeys.map((paragraphKey) => (
            <PortfolioSectionCard
              as="p"
              className="text-lg leading-9 sm:text-xl sm:leading-10"
              key={paragraphKey}
            >
              {content[paragraphKey]}
            </PortfolioSectionCard>
          ))}
        </div>
      </PortfolioSectionContent>
    </Section>
  );
}
