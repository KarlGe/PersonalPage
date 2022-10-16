import { cx } from "@linaria/core";
import React, { ReactNode } from "react";
import { useElementHeight } from "../../../hooks/useElementHeight";
import { useElementMousePosition } from "../../../hooks/useElementMousePosition";
import Title, { HeaderLevel } from "../Title";
import { offsetBorderClassName, style } from "./borderOffsetWrapper.linaria";

type Props = {
  children: ReactNode;
  filled?: boolean;
  title?: string;
  titleLevel?: HeaderLevel;
  wrapperType?: "a" | "div";
};

function BorderOffsetWrapper({
  children,
  wrapperType,
  filled,
  title,
  titleLevel,
}: Props) {
  const { elementRef } = useElementMousePosition();
  const { heightRef, elementHeight } = useElementHeight();

  const Wrapper = wrapperType as React.ElementType;

  return (
    <Wrapper
      className={cx(style, offsetBorderClassName, filled && "filled")}
      ref={elementRef as React.RefObject<HTMLDivElement>}
      style={{ "--bottom-height": `${elementHeight}px` }}
    >
      <div className="topSection">{children}</div>
      {title && (
        <div className="bottomSection" ref={heightRef}>
          <Title className="title" level={titleLevel || "span"}>
            {title}
          </Title>
        </div>
      )}
    </Wrapper>
  );
}

BorderOffsetWrapper.defaultProps = {
  filled: false,
  wrapperType: "div",
  title: undefined,
  titleLevel: "span",
};

export default BorderOffsetWrapper;
