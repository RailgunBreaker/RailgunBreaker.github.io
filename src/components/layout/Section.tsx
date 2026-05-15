import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`site-section-gradient border-border w-full rounded-xl border px-4 py-10 shadow-[var(--shadow-md)] sm:rounded-2xl sm:px-6 sm:py-12 md:py-16 ${className}`}
    >
      <div>{children}</div>
    </section>
  );
}
