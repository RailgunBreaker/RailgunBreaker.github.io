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

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <section
              className="rounded-3xl border border-blue-200/18 bg-slate-950/20 px-5 py-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.035)] transition duration-300 ease-out hover:border-blue-200/35 hover:bg-blue-400/6 hover:shadow-[0_18px_42px_rgb(96_165_250/0.12),inset_0_1px_0_rgb(255_255_255/0.055)] sm:px-6 sm:py-7"
              key={category.titleKey}
            >
              <h3 className="text-base font-bold tracking-[0.12em] text-slate-300 uppercase sm:text-lg">
                {content[category.titleKey]}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                {category.skills.map(({ Icon, labelKey }) => (
                  <span
                    className="group/chip inline-flex min-h-10 max-w-full items-center gap-3 rounded-full border border-sky-200/25 bg-sky-300/15 px-4 py-1.5 text-base leading-snug font-medium text-slate-200 shadow-(--shadow-sm) transition duration-200 ease-out hover:-translate-y-1 hover:border-blue-300/65 hover:bg-blue-400/20 hover:text-white hover:shadow-[0_12px_28px_rgb(96_165_250/0.2)] sm:text-lg"
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
