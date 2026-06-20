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
  const gapClass = gap === "wide" ? "gap-10 sm:gap-14" : "gap-10 sm:gap-12";

  return <div className={`flex flex-col ${gapClass}`}>{children}</div>;
}

export function PortfolioSectionHeading({
  children,
}: PortfolioSectionHeadingProps) {
  return (
    <header>
      <h2 className="flex items-center text-3xl font-bold tracking-normal text-white sm:text-4xl">
        <FiChevronRight
          className="mr-2 size-9 shrink-0 text-sky-300 sm:size-10"
          aria-hidden
        />
        {children}
      </h2>
      <div className="mt-4 h-1 w-20 rounded-full bg-cyan-300" />
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
      className={`border-border rounded-2xl border border-l-4 border-l-blue-400 bg-slate-950/25 px-5 py-6 text-slate-300 shadow-[inset_0_1px_0_rgb(255_255_255/0.03)] transition duration-300 ease-out focus-within:border-sky-200/70 focus-within:border-l-cyan-300 focus-within:bg-sky-300/8 focus-within:shadow-[0_22px_55px_rgb(14_165_233/0.18),inset_0_1px_0_rgb(255_255_255/0.07)] hover:border-sky-200/70 hover:border-l-cyan-300 hover:bg-sky-300/8 hover:shadow-[0_22px_55px_rgb(14_165_233/0.18),inset_0_1px_0_rgb(255_255_255/0.07)] motion-safe:focus-within:-translate-y-2 motion-safe:hover:-translate-y-2 sm:px-7 ${className}`}
    >
      {children}
    </Element>
  );
}
