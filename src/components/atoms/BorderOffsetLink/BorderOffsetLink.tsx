import React from "react";
import BorderOffsetWrapper from "../BorderOffsetWrapper/BorderOffsetWrapper";
import { HeaderLevel } from "../Title";
import { linkStyle } from "./borderOffsetLink.linaria";

type Props = {
  title: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  titleLevel?: HeaderLevel;
  target?: "_blank" | undefined;
};

const BorderOffsetLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ title, onClick, href, children, target, titleLevel }, ref) => {
    return (
      <a
        className={linkStyle}
        target={target}
        onClick={onClick}
        href={href}
        ref={ref}
      >
        <BorderOffsetWrapper title={title} titleLevel={titleLevel}>
          {children}
        </BorderOffsetWrapper>
      </a>
    );
  }
);

BorderOffsetLink.defaultProps = {
  titleLevel: "span",
  target: undefined,
};

export default BorderOffsetLink;
