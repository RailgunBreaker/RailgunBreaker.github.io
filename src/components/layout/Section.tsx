import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`site-section-gradient w-full rounded-xl border border-sky-200/80 px-4 py-10 shadow-lg shadow-sky-900/10 sm:rounded-2xl sm:px-6 sm:py-12 md:py-16 dark:border-sky-200/20 dark:shadow-blue-950/20 ${className}`}
    >
      <div>{children}</div>
    </section>
  );
}
