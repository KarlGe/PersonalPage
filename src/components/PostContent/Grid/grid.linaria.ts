import { css } from "linaria";
import { mediaQueries } from "../../../helpers/styleHelpers";

export const style = css`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  ${mediaQueries.sm} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
