import { Awards } from "../sections/Awards";
import { EducationBackground } from "../sections/EducationBackground";
import { Experience } from "../sections/Experience";
import { Hobbies } from "../sections/Hobbies";
import { Introduction } from "../sections/Introduction";
import { Overview } from "../sections/Overview";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";

export function App() {
  return (
    <div className="site-page-gradient min-h-dvh px-1.5 py-2 text-(--foreground) sm:px-4 sm:py-6 lg:py-10">
      <main className="site-main-gradient border-border mx-auto w-full max-w-6xl overflow-hidden rounded-xl border shadow-[0_30px_80px_rgb(0_0_0/0.5),inset_0_0_0_1px_rgb(149_193_255/0.08)] sm:rounded-3xl">
        <div className="flex w-full flex-col gap-2 p-2 sm:gap-3 sm:p-3">
          <Overview />
          <Introduction />
          <Projects />
          <Experience />
          <EducationBackground />
          <Awards />
          <Skills />
          <Hobbies />
        </div>
      </main>
    </div>
  );
}
