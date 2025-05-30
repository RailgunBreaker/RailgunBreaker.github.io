import React from "react";

interface LabelGroupProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "alt";
  className?: string;
}

function LabelGroup({
  title,
  children,
  variant = "default",
  className = "",
}: LabelGroupProps) {
  const groupClass = variant === "alt" ? "label-group" : "label-group2";
  const headerClass = variant === "alt" ? "header alt" : "header";

  return (
    <div className={`${groupClass} mb-4 sm:mb-6 ${className}`}>
      <span
        className={`${headerClass} text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 block`}
      >
        {variant === "alt" && <i className="fas fa-tag mr-2" />}
        {title}
      </span>
      <div className="flex flex-wrap gap-1 sm:gap-2">{children}</div>
    </div>
  );
}

interface LabelProps {
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

function Label({ icon, children, className = "" }: LabelProps) {
  return (
    <span
      className={`label inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${className}`}
    >
      {icon && <i className={`${icon} mr-1 sm:mr-2`} />} {children}
    </span>
  );
}

export { LabelGroup, Label };
