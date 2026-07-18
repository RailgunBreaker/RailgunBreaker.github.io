import type { ReactNode } from "react";
import { FiChevronRight } from "react-icons/fi";

type PortfolioSectionContentProps = {
  children: ReactNode;
  gap?: "default" | "wide";
};

type PortfolioSectionHeadingProps = {
  children: ReactNode;
};

type PortfolioSectionCardProps = {
  children: ReactNode;
  as?: "article" | "li" | "p";
  className?: string;
};

export function PortfolioSectionContent({
  children,
  gap = "default",
}: PortfolioSectionContentProps) {
  const gapClass = gap === "wide" ? "gap-5 md:gap-6" : "gap-5 md:gap-6";

  return <div className={`flex flex-col ${gapClass}`}>{children}</div>;
}

export function PortfolioSectionHeading({
  children,
}: PortfolioSectionHeadingProps) {
  return (
    <header>
      <h2 className="flex items-center text-xl font-bold tracking-tight text-white md:text-2xl">
        <FiChevronRight
          className="mr-1 size-6 shrink-0 text-sky-300 md:mr-2 md:size-7"
          aria-hidden
        />
        {children}
      </h2>
      <div className="mt-3 h-0.5 w-14 rounded-full bg-blue-400 md:w-16" />
    </header>
  );
}

export function PortfolioSectionCard({
  children,
  as: Element = "article",
  className = "",
}: PortfolioSectionCardProps) {
  return (
    <Element
      className={`border-border rounded-xl border border-l-3 border-l-sky-400 bg-[linear-gradient(145deg,rgb(7_26_49/0.73),rgb(6_19_37/0.72))] px-4 py-4 text-slate-300 shadow-[0_10px_20px_rgb(3_8_18/0.32)] transition duration-200 focus-within:border-blue-200/55 hover:border-blue-200/45 md:px-5 ${className}`}
    >
      {children}
    </Element>
  );
}
