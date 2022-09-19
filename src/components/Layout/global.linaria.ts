import { css } from "linaria";
import { border, colors } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";

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
`;
