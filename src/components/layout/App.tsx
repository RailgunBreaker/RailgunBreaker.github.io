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
    <div className="site-page-gradient min-h-dvh px-0 py-0 text-(--foreground) sm:px-4 sm:py-6">
      <main className="site-main-gradient border-border mx-auto flex min-h-dvh w-full max-w-6xl items-center justify-center overflow-hidden shadow-2xl shadow-blue-950/35 md:min-h-[calc(100dvh-4rem)] md:w-[calc(100%-1rem)] md:rounded-2xl md:border xl:w-4/5">
        <div className="flex w-full flex-col">
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
