import { css } from "@linaria/core";
import { border, colors } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";
import {
  makeOffsetBorderPosition,
  offsetBorderClass,
} from "../atoms/BorderOffsetWrapper/borderOffsetWrapper.linaria";

export const style = css`
  ul {
    padding: 0;
    margin-top: 4rem;
    display: flex;
    flex-flow: wrap;
    gap: 2rem;
    justify-content: space-around;
    li {
      width: 30%;
      ${mediaQueries.sm} {
        width: 15%;
      }
      list-style: none;
      text-align: center;
      &:last-child {
        ${offsetBorderClass}::after {
          border-radius: 100%;
        }
        a:hover, a:focus {
          ${offsetBorderClass}::after {
            border-radius: ${border.radius.default};
          }
        }
      }
      a${offsetBorderClass} {
        &::after {
          ${makeOffsetBorderPosition(2, -1, 8, 2)}
          ${mediaQueries.sm} {
            ${makeOffsetBorderPosition(2, -1, 3, 2)}
          }
        }
        display: block;
        text-decoration: none;
        img {
          display: block;
        }
        &:hover,
        &:focus {
          h2 {
            color: ${colors.lightColor};
          }
          &::after {
            border-radius: ${border.radius.default};
            ${makeOffsetBorderPosition(0, 0, -1, 0)};
            top: 80%;
            ${mediaQueries.sm} {
              top: 80%;
            }
          }
        }
      }
    }
  }
`;
