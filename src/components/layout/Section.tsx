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
      className={`site-section-gradient border-border w-full border px-4 py-10 shadow-[var(--shadow-md)] sm:px-6 sm:py-12 md:py-16 ${className}`}
    >
      <div
        className={
          hasInnerCard
            ? "border-border rounded-3xl border bg-slate-950/30 px-6 py-8 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] sm:px-8 sm:py-10 md:px-10 md:py-12"
            : ""
        }
      >
        {children}
      </div>
    </section>
  );
}
