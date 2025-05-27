import React from "react";

interface SectionProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

function Section({
  title,
  icon = "fas fa-chevron-right",
  children,
  className = "",
}: SectionProps) {
  return (
    <div className={`section intro ${className}`}>
      <h2>
        <i className={icon} aria-hidden="true" /> {title}
      </h2>
      {children}
    </div>
  );
}

export default Section;
