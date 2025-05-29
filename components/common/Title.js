import React from "react";

/**
 * Large logo-style title (e.g., homepage or branding)
 */
export const TitleLogo = ({ className = "", caption = "", title = "" }) => {
  return (
    <h1 className={`${className} title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  );
};

/**
 * Small title, typically for subheadings
 */
export const TitleSm = ({ title = "" }) => {
  return <h1 className="titleSm">{title}</h1>;
};

/**
 * Main section title (e.g., hero section, section headings)
 */
export const Title = ({ title = "", className = "" }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};