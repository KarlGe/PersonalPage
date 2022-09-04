import { css } from "linaria";
import { sizes } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";

export const listStyle = css`
  margin: auto;
  ${mediaQueries.sm} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    display: grid;
  }
`;
