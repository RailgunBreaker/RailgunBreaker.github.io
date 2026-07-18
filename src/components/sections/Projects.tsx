import {
  FaArchive,
  FaExternalLinkAlt,
  FaFilePdf,
  FaGithub,
  FaProjectDiagram,
} from "react-icons/fa";
import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

const projectsContentRequests = [
  "projects.title",
  "projects.sscim.eyebrow",
  "projects.sscim.title",
  "projects.sscim.description",
  "projects.sscim.detail",
  "projects.sscim.status",
  "projects.sscim.live",
  "projects.sscim.source",
  "projects.archived.title",
  "projects.archived.description",
  "projects.archived.open",
  "projects.archived.japan.title",
  "projects.archived.japan.meta",
  "projects.archived.japan.description",
  "projects.archived.humanitarian.title",
  "projects.archived.humanitarian.meta",
  "projects.archived.humanitarian.description",
  "projects.archived.fdi.title",
  "projects.archived.fdi.meta",
  "projects.archived.fdi.description",
  "projects.archived.russia.title",
  "projects.archived.russia.meta",
  "projects.archived.russia.description",
].map((contentKey) => ({ sectionName: "content", contentKey }));

const archivedProjects = [
  {
    id: "japan",
    href: "/24122200597_SONG%20Guohua.pdf",
  },
  {
    id: "humanitarian",
    href: "/BAPA3001_Final_Guohua.S.pdf",
  },
  {
    id: "fdi",
    href: "/STST2001%20AE4_Guohua.S.pdf",
  },
  {
    id: "russia",
    href: "/Thesis_Fall2025_Guohua%20Song.pdf",
  },
] as const;

export function Projects() {
  const content = useContent(projectsContentRequests);

  return (
    <Section>
      <PortfolioSectionContent>
        <PortfolioSectionHeading>
          {content["projects.title"]}
        </PortfolioSectionHeading>

        <article className="group relative overflow-hidden rounded-2xl border border-blue-200/20 bg-[linear-gradient(135deg,rgb(10_38_68/0.92),rgb(5_22_43/0.96))] p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:p-8">
          <div className="pointer-events-none absolute -top-24 -right-20 size-56 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="relative">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-sky-300 uppercase md:text-sm">
              <FaProjectDiagram aria-hidden />
              {content["projects.sscim.eyebrow"]}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              {content["projects.sscim.title"]}
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-200 md:text-lg md:leading-8">
              {content["projects.sscim.description"]}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 md:text-base md:leading-7">
              {content["projects.sscim.detail"]}
            </p>
            <span className="mt-5 inline-flex rounded-full border border-amber-200/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100 md:text-sm">
              {content["projects.sscim.status"]}
            </span>
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:flex-col">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
              href="https://sscim.railgunbreaker.icu/"
              rel="noreferrer"
              target="_blank"
            >
              <FaExternalLinkAlt aria-hidden />
              {content["projects.sscim.live"]}
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200/30 bg-slate-950/25 px-5 py-2.5 text-sm font-bold text-slate-100 transition hover:border-blue-200/60 hover:bg-blue-400/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
              href="https://github.com/RailgunBreaker/sscim"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub aria-hidden />
              {content["projects.sscim.source"]}
            </a>
          </div>
        </article>

        <section aria-labelledby="archived-projects-title">
          <div className="mb-4 flex items-start gap-3">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-blue-200/20 bg-blue-400/10 text-sky-300">
              <FaArchive aria-hidden />
            </span>
            <div>
              <h3
                className="text-lg font-bold text-slate-100 md:text-xl"
                id="archived-projects-title"
              >
                {content["projects.archived.title"]}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                {content["projects.archived.description"]}
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {archivedProjects.map((project) => (
              <a
                className="group/paper flex h-full flex-col rounded-xl border border-blue-200/18 bg-[linear-gradient(145deg,rgb(7_26_49/0.74),rgb(6_19_37/0.72))] p-4 transition hover:border-blue-200/45 hover:bg-blue-400/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 md:p-5"
                href={project.href}
                key={project.id}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-start justify-between gap-3">
                  <FaFilePdf
                    className="mt-1 size-5 shrink-0 text-sky-300"
                    aria-hidden
                  />
                  <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {content[`projects.archived.${project.id}.meta`]}
                  </span>
                </div>
                <h4 className="mt-3 text-base leading-6 font-bold text-slate-100 md:text-lg">
                  {content[`projects.archived.${project.id}.title`]}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
                  {content[`projects.archived.${project.id}.description`]}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-300 group-hover/paper:text-sky-200">
                  {content["projects.archived.open"]}
                  <FaExternalLinkAlt className="size-3" aria-hidden />
                </span>
              </a>
            ))}
          </div>
        </section>
      </PortfolioSectionContent>
    </Section>
  );
}
