import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  hasInnerCard?: boolean;
};

export function Section({
  children,
  className = "",
  hasInnerCard = true,
}: SectionProps) {
  return (
    <section
      className={`site-section-gradient border-border w-full rounded-xl border px-4 py-5 shadow-(--shadow-md) backdrop-blur-md sm:rounded-2xl sm:px-6 sm:py-7 md:px-8 md:py-8 ${className}`}
    >
      <div className={hasInnerCard ? "" : ""}>{children}</div>
    </section>
  );
}
