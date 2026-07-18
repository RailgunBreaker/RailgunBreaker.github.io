import { skillCategories } from "../../assets/skills-details";
import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const skillsContentRequests = [
  { sectionName: "content", contentKey: "skills.title" },
  ...skillCategories.flatMap((category) => [
    { sectionName: "content", contentKey: category.titleKey },
    ...category.skills.map((skill) => ({
      sectionName: "content",
      contentKey: skill.labelKey,
    })),
  ]),
];

export function Skills() {
  const content = useContent(skillsContentRequests);

  return (
    <Section>
      <PortfolioSectionContent>
        <PortfolioSectionHeading>
          {content["skills.title"]}
        </PortfolioSectionHeading>

        <div className="grid items-start gap-3 md:grid-cols-2">
          {skillCategories.map((category) => (
            <section
              className="rounded-xl border border-l-3 border-blue-200/18 border-l-sky-400 bg-[linear-gradient(145deg,rgb(7_26_49/0.73),rgb(6_19_37/0.72))] px-4 py-4 shadow-[0_10px_20px_rgb(3_8_18/0.32)] transition hover:border-blue-200/45 md:px-5"
              key={category.titleKey}
            >
              <h3 className="text-sm font-bold tracking-[0.12em] text-slate-300 uppercase md:text-base">
                {content[category.titleKey]}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map(({ Icon, labelKey }) => (
                  <span
                    className="group/chip inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-sky-200/25 bg-sky-300/15 px-3 py-1 text-sm leading-snug font-medium text-slate-200 transition duration-200 hover:border-blue-300/65 hover:bg-blue-400/20 hover:text-white md:text-base"
                    key={labelKey}
                  >
                    <Icon
                      className="size-5 shrink-0 text-sky-200 transition duration-200 group-hover/chip:text-blue-100"
                      aria-hidden
                    />
                    <span className="min-w-0 wrap-break-word">
                      {content[labelKey]}
                    </span>
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PortfolioSectionContent>
    </Section>
  );
}
