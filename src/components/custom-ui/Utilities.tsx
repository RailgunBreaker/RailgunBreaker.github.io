import React from "react";

interface IconTextProps {
  icon: string;
  children: React.ReactNode;
  className?: string;
}

function IconText({ icon, children, className = "" }: IconTextProps) {
  return (
    <span className={className}>
      <i className={icon} /> {children}
    </span>
  );
}

interface ListItemProps {
  children: React.ReactNode;
  indent?: boolean;
  className?: string;
}

function ListItem({ children, indent = true, className = "" }: ListItemProps) {
  return (
    <div
      className={`flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3 ${className}`}
    >
      {indent && (
        <span className="text-primary font-bold text-sm sm:text-base mt-0.5">
          •
        </span>
      )}
      <span className="text-sm sm:text-base leading-relaxed flex-1">
        {children}
      </span>
    </div>
  );
}

export { IconText, ListItem };
