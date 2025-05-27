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
    <div className={`${groupClass} ${className}`}>
      <span className={headerClass}>
        {variant === "alt" && <i className="fas fa-tag" />}
        {title}
      </span>
      {children}
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
    <span className={`label ${className}`}>
      {icon && <i className={icon} />} {children}
    </span>
  );
}

export { LabelGroup, Label };
