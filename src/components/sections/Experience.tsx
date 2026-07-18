import { FaDownload, FaFilePdf } from "react-icons/fa";
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
    bulletKeys: [
      "experience.research.bullet1",
      "experience.research.bullet2",
      "experience.research.bullet3",
    ],
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
  { sectionName: "content", contentKey: "experience.cv.title" },
  { sectionName: "content", contentKey: "experience.cv.description" },
  { sectionName: "content", contentKey: "experience.cv.action" },
  { sectionName: "content", contentKey: "experience.cv.aria" },
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

        <div className="grid gap-6 lg:grid-cols-2">
          {experienceItems.map((item) => (
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
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300 md:text-base">
                {item.bulletKeys.map((bulletKey) => (
                  <li key={bulletKey}>{content[bulletKey]}</li>
                ))}
              </ul>
            </PortfolioSectionCard>
          ))}

          <a
            aria-label={content["experience.cv.aria"]}
            className="group border-border flex flex-col gap-4 rounded-xl border border-l-3 border-l-blue-400 bg-slate-950/25 px-5 py-5 text-slate-200 transition outline-none hover:border-blue-200/45 hover:bg-blue-400/8 focus-visible:ring-2 focus-visible:ring-blue-200/80 lg:col-span-2 lg:flex-row lg:items-center lg:justify-between lg:px-6"
            download="Guohua.S-CV.pdf"
            href="/Guohua.S-CV.pdf"
          >
            <span className="flex min-w-0 items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200/20 bg-slate-950/35 text-blue-200 transition duration-300 group-hover:border-blue-200/35 group-hover:bg-blue-400/12 group-hover:text-blue-100 group-focus-visible:border-blue-200/35 group-focus-visible:bg-blue-400/12 group-focus-visible:text-blue-100">
                <FaFilePdf className="size-6" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-xl font-bold text-white sm:text-2xl">
                  {content["experience.cv.title"]}
                </span>
                <span className="mt-2 block text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {content["experience.cv.description"]}
                </span>
              </span>
            </span>
            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-blue-200/25 bg-sky-300/12 px-4 py-2 text-sm font-bold text-blue-100 transition duration-300 group-hover:border-blue-200/45 group-hover:bg-blue-400/18 group-hover:text-white group-focus-visible:border-blue-200/45 group-focus-visible:bg-blue-400/18 group-focus-visible:text-white sm:text-base">
              <FaDownload className="size-4" aria-hidden />
              {content["experience.cv.action"]}
            </span>
          </a>
        </div>
      </PortfolioSectionContent>
    </Section>
  );
}
