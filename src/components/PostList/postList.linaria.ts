import { css } from "linaria";
import { sizes } from "../../config/vars";

export const listStyle = css`
  max-width: ${sizes.contentWidth}px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;
