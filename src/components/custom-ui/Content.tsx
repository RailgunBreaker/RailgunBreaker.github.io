import React from "react";

interface ContentBlockProps {
  children: React.ReactNode;
  className?: string;
}

function ContentBlock({ children, className = "" }: ContentBlockProps) {
  return (
    <p
      className={`text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed md:leading-loose p-3 sm:p-4 md:p-6 ${className}`}
    >
      {children}
    </p>
  );
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
  download?: string;
  style?: React.CSSProperties;
  className?: string;
}

function Link({ href, children, download, style, className = "" }: LinkProps) {
  return (
    <a href={href} download={download} style={style} className={className}>
      {children}
    </a>
  );
}

export { ContentBlock, Link };
