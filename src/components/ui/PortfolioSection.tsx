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
  as?: "article" | "p";
  className?: string;
};

export function PortfolioSectionContent({
  children,
  gap = "default",
}: PortfolioSectionContentProps) {
  const gapClass = gap === "wide" ? "gap-7 md:gap-9" : "gap-7 md:gap-8";

  return <div className={`flex flex-col ${gapClass}`}>{children}</div>;
}

export function PortfolioSectionHeading({
  children,
}: PortfolioSectionHeadingProps) {
  return (
    <header>
      <h2 className="flex items-center text-2xl font-bold tracking-normal text-white md:text-3xl">
        <FiChevronRight
          className="mr-1 size-7 shrink-0 text-sky-300 md:mr-2 md:size-8"
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
      className={`border-border border-l-2 border-l-blue-400 bg-slate-950/18 py-4 pl-4 text-slate-300 transition duration-300 ease-out md:rounded-xl md:border md:border-l-3 md:bg-slate-950/25 md:px-6 md:py-5 md:shadow-[inset_0_1px_0_rgb(255_255_255/0.03)] md:focus-within:border-blue-200/70 md:hover:border-blue-200/70 md:hover:bg-blue-400/8 md:hover:shadow-[0_16px_36px_rgb(96_165_250/0.14)] ${className}`}
    >
      {children}
    </Element>
  );
}
