import { css } from "linaria";
import { mediaQueries } from "../../helpers/styleHelpers";

export const listStyle = css`
  margin: auto;
  display: grid;
  gap: 1rem;
  padding-bottom: 2rem;
  ${mediaQueries.sm} {
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    .doubleHeight {
      grid-row: span 2;
    }
  }
`;
