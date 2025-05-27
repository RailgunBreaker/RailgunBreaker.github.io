import React from "react";

interface IdentityListProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

function IdentityList({
  title,
  icon = "fas fa-external-link-alt",
  children,
  className = "",
}: IdentityListProps) {
  return (
    <figure className={`identities ${className}`}>
      <figcaption>
        <i className={icon} />
        {title}
      </figcaption>
      <ul>{children}</ul>
    </figure>
  );
}

interface IdentityItemProps {
  href: string;
  icon: string;
  label: string;
  value: string;
  isShutdown?: boolean;
  className?: string;
}

function IdentityItem({
  href,
  icon,
  label,
  value,
  isShutdown = false,
  className = "",
}: IdentityItemProps) {
  const liClass = isShutdown ? "shutdown" : "";

  return (
    <li className={liClass}>
      <a href={href} className={className}>
        <span className="label">
          <i className={icon} /> {label}
        </span>{" "}
        <span className="fake-link">{value}</span>
      </a>
    </li>
  );
}

export { IdentityList, IdentityItem };
