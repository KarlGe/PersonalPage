import React from "react";

export type HeaderLevel = "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  className: string;
  children: React.ReactNode;
  level: HeaderLevel;
};

function Title({ className, children, level }: Props) {
  const TitleText = level;
  return <TitleText className={className}>{children}</TitleText>;
}

export default Title;
