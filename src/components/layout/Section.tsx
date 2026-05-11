import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`w-full rounded-xl bg-blue-500 px-4 py-10 sm:rounded-2xl sm:px-6 sm:py-12 md:py-16 ${className}`}
    >
      <div>{children}</div>
    </section>
  );
}
