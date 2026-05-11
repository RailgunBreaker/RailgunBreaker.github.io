import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`w-full rounded-2xl px-6 py-16 ${className} bg-blue-500`}
    >
      <div>{children}</div>
    </section>
  );
}
