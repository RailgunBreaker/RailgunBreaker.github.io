import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

function GridContainer({ children, className = "" }: GridContainerProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ${className}`}
    >
      {children}
    </div>
  );
}

interface GridColumnProps {
  children: React.ReactNode;
  className?: string;
  size?: string; // e.g., "grid-50", "grid-40", "grid-60"
  mobileSize?: string; // e.g., "mobile-grid-100"
  cols?: "1" | "2" | "3" | "full"; // Simplified responsive column sizing
}

function GridColumn({
  children,
  className = "",
  size = "",
  mobileSize = "",
  cols = "1",
}: GridColumnProps) {
  const getColumnClasses = () => {
    switch (cols) {
      case "2":
        return "col-span-1 md:col-span-2";
      case "3":
        return "col-span-1 md:col-span-2 lg:col-span-3";
      case "full":
        return "col-span-full";
      default:
        return "col-span-1";
    }
  };

  return (
    <div className={`${getColumnClasses()} ${size} ${mobileSize} ${className}`}>
      {children}
    </div>
  );
}

export { GridContainer, GridColumn };
