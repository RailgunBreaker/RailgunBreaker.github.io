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
    <div
      className={`section intro m-2 sm:m-4 lg:m-6 p-4 sm:p-6 lg:p-8 ${className}`}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
        <i
          className={`${icon} mr-2 sm:mr-3 text-lg sm:text-xl md:text-2xl lg:text-3xl`}
          aria-hidden="true"
        />
        {title}
      </h2>
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">{children}</div>
    </div>
  );
}

export default Section;
