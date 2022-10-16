import { css } from "@linaria/core";
import { mediaQueries } from "../../../helpers/styleHelpers";
import {
  makeOffsetBorderPosition,
  offsetBorderWidth,
} from "../BorderOffsetWrapper/borderOffsetWrapper.linaria";

export const linkStyle = css`
  text-decoration: none;
  > div {
    &::after {
      ${makeOffsetBorderPosition(2, -2, 6, 2)}
    }
    ${mediaQueries.sm} {
      &::after {
        ${makeOffsetBorderPosition(2, -1, 3, 2)}
      }
    }
  }
  &:hover,
  &:focus-within,
  &:active {
    color: white;
    * {
        color: white;
    }
    > div {
      &:after {
        ${makeOffsetBorderPosition(2, -1, 0, 2)}
      }
      .title {
        transform: translateX(${offsetBorderWidth}px);
      }
    }
  }
`;
