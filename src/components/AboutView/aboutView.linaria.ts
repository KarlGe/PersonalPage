import { colors } from "./../../config/vars";
import { css } from "linaria";
import { mediaQueries } from "../../helpers/styleHelpers";
import {
  makeOffsetBorderPosition,
  offsetBorderClass,
} from "../Layout/global.linaria";

export const aboutStyle = css`
  .image-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  img {
    width: 100px;
  }
  ${offsetBorderClass}:after {
    ${makeOffsetBorderPosition(-2, 2, 2, -2)}
  }
  padding-top: 1rem;
  gap: 1rem;
  padding: 1rem;
  p:first-child {
    margin-top: 0;
  }
  ${mediaQueries.sm} {
    img {
      width: 252px;
    }
    padding-top: 3rem;
    display: flex;
    gap: 1rem;
  }
`;
