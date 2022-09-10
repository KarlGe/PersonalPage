import { css } from "linaria";
import { colors, sizes } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";
import {
  makeOffsetBorderPosition,
  offsetBorderClass,
  offsetBorderWidth,
} from "../Layout/global.linaria";

export const listStyle = css`
  margin: auto;

  ${offsetBorderClass} {
    &:after {
      ${makeOffsetBorderPosition(2, -1, 4, 2)}
    }
    &:hover::after {
      background: ${colors.accentColor};
      bottom: -${offsetBorderWidth * 2}px;
      opacity: 1;
    }
  }

  ${mediaQueries.sm} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    display: grid;
  }
`;
