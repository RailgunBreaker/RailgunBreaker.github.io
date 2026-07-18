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
      className={`site-section-gradient border-border w-full border-x-0 border-y px-4 py-8 sm:px-6 sm:py-10 md:border-x md:px-8 md:py-12 ${className}`}
    >
      <div
        className={
          hasInnerCard
            ? "md:border-border px-0 py-0 md:rounded-2xl md:border md:bg-slate-950/30 md:px-8 md:py-9 md:shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
            : ""
        }
      >
        {children}
      </div>
    </section>
  );
}
