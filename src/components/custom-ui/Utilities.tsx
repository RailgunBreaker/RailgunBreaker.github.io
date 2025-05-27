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
  const prefix = indent ? "\u00A0\u00A0\u00A0\u00A0• " : "";

  return (
    <span className={className}>
      {prefix}
      {children}
      <br />
    </span>
  );
}

export { IconText, ListItem };
