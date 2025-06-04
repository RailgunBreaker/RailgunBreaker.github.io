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
      className={`section intro m-1 sm:m-2 md:m-4 lg:m-6 p-3 sm:p-4 md:p-6 lg:p-8 ${className}`}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        <i
          className={`${icon} mr-1 sm:mr-2 md:mr-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
          aria-hidden="true"
        />
        {title}
      </h2>
      <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
        {children}
      </div>
    </div>
  );
}

export default Section;
