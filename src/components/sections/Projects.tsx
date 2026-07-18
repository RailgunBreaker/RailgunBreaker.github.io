import { FaExternalLinkAlt, FaGithub, FaProjectDiagram } from "react-icons/fa";
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
].map((contentKey) => ({ sectionName: "content", contentKey }));

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
      </PortfolioSectionContent>
    </Section>
  );
}
