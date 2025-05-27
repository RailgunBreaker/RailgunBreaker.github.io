import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

function GridContainer({ children, className = "" }: GridContainerProps) {
  return (
    <div className={`block grid-container grid-parent ${className}`}>
      {children}
    </div>
  );
}

interface GridColumnProps {
  children: React.ReactNode;
  className?: string;
  size?: string; // e.g., "grid-50", "grid-40", "grid-60"
  mobileSize?: string; // e.g., "mobile-grid-100"
}

function GridColumn({
  children,
  className = "",
  size = "",
  mobileSize = "mobile-grid-100",
}: GridColumnProps) {
  return (
    <div className={`split ${size} ${mobileSize} ${className}`}>{children}</div>
  );
}

export { GridContainer, GridColumn };
