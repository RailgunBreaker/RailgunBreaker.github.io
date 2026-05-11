import { Awards } from "../sections/Awards";
import { EducationBackground } from "../sections/EducationBackground";
import { Experience } from "../sections/Experience";
import { Hobbies } from "../sections/Hobbies";
import { Introduction } from "../sections/Introduction";
import { Overview } from "../sections/Overview";
import { Skills } from "../sections/Skills";

export function App() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-6xl items-center justify-center bg-blue-800 px-3 py-4 sm:px-5 sm:py-6 md:my-8 md:w-[92%] md:rounded-2xl md:px-6 md:py-8 lg:w-4/5">
      <div className="flex w-full flex-col gap-3 sm:gap-4">
        <Overview />
        <Introduction />
        <Experience />
        <EducationBackground />
        <Awards />
        <Skills />
        <Hobbies />
      </div>
    </main>
  );
}
