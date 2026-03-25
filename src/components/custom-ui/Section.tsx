import React from "react";

interface SectionProps {
  title: string;
  hint?: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

function Section({
  title,
  hint,
  icon = "fas fa-chevron-right",
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`section intro portfolio-section ${className}`}>
      <header className="portfolio-section-head">
        <h2 className="portfolio-section-title">
          <i className={`${icon} section-title-icon`} aria-hidden="true" />
          <span>{title}</span>
        </h2>
        {hint && <p className="portfolio-section-hint">{hint}</p>}
      </header>
      <div className="portfolio-section-body">
        {children}
      </div>
    </section>
  );
}

export default Section;
