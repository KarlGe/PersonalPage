import { css } from "linaria";
import { border, colors } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";

export const offsetBorderWidth = 10;
export const offsetBorderClassName = "has-offset-border";
export const offsetBorderClass = `.${offsetBorderClassName}`;

export const makeOffsetBorderPosition = (
  top: number,
  right: number,
  bottom: number,
  left: number
) => {
  return `
  top: ${top * offsetBorderWidth}px;
  right: ${right * offsetBorderWidth}px;
  bottom: ${bottom * offsetBorderWidth}px;
  left: ${left * offsetBorderWidth}px;`;
};

export const globalStyles = css`
  :global() {
    html {
      box-sizing: border-box;
      min-height: 100%; /* make sure it is at least as tall as the viewport */
      position: relative;
    }
    html,
    body {
      background: ${colors.darkColor};
      padding: 0;
      margin: 0;
    }
    html,
    body,
    main,
    #__next {
      height: 100%; /* make sure it is at least as tall as the viewport */
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    * {
      font-family: "Source Sans Pro";
      color: ${colors.textColor};
    }
    p {
      color: ${colors.textColor};
      font-size: 1.125rem;
      ${mediaQueries.sm} {
        font-size: 1.375rem;
      }
    }
  }
  ${offsetBorderClass} {
    position: relative;
    &.filled::after {
      background-color: ${colors.accentColor};
    }
    &:after {
      border: 1px solid ${colors.accentColor};
      content: "";
      position: absolute;
      transition: 200ms;
      border-radius: ${border.radius.default};
      ${makeOffsetBorderPosition(2, -2, -2, 2)}
      z-index: 0;
    }
    > * {
      position: relative;
      z-index: 1;
    }
  }
`;
