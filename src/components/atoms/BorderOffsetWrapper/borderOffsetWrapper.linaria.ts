import { css } from "@linaria/core";
import { border, colors } from "../../../config/vars";
import { mediaQueries } from "../../../helpers/styleHelpers";

export const offsetBorderWidth = 10;
export const offsetBorderWidthMobile = 5;
export const offsetBorderClassName = "has-offset-border";
export const offsetBorderClass = `.${offsetBorderClassName}`;

export const makeOffsetBorderPosition = (
  top: number,
  right: number,
  bottom: number,
  left: number
) => {
  return `
    top: ${top * offsetBorderWidthMobile}px;
    right: ${right * offsetBorderWidthMobile}px;
    bottom: ${bottom * offsetBorderWidthMobile}px;
    left: ${left * offsetBorderWidthMobile}px;
    ${mediaQueries.sm} {
      top: ${top * offsetBorderWidth}px;
      right: ${right * offsetBorderWidth}px;
      bottom: ${bottom * offsetBorderWidth}px;
      left: ${left * offsetBorderWidth}px;
    }`;
};
export const style = css`
  position: relative;
  &:after {
    background-color: ${colors.accentColor};
    content: "";
    position: absolute;
    transition: 200ms;
    border-radius: ${border.radius.default};
    ${makeOffsetBorderPosition(2, -2, -2, 2)}
    ${mediaQueries.sm} {
      ${makeOffsetBorderPosition(2, -1, -1, 2)}
      bottom: var(--bottom-height);
    }
    z-index: 0;
    transform: translate(
      calc(var(--mouse-pos-x) * 5px),
      calc(var(--mouse-pos-y) * 5px)
    );
  }
  .title {
    max-width: calc(100% - ${offsetBorderWidth * 4}px);
    margin: 0.5rem auto;
    transition: transform 200ms;
  }
  > * {
    position: relative;
    z-index: 1;
  }
`;
