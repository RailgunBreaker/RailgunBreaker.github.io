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
    <div className={`portfolio-list-item ${className}`}>
      {indent && (
        <span className="portfolio-list-bullet">•</span>
      )}
      <span className="portfolio-list-content">{children}</span>
    </div>
  );
}

export { IconText, ListItem };
