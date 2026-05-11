import { Awards } from "../sections/Awards";
import { EducationBackground } from "../sections/EducationBackground";
import { Experience } from "../sections/Experience";
import { Hobbies } from "../sections/Hobbies";
import { Introduction } from "../sections/Introduction";
import { Overview } from "../sections/Overview";
import { Skills } from "../sections/Skills";

export function App() {
  return (
    <main className="mx-auto my-10 flex min-h-dvh max-w-4/5 items-center justify-center rounded-2xl bg-blue-800 px-6 py-8">
      <div className="flex w-full flex-col gap-4">
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
