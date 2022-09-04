import { css } from "linaria";
import { colors } from "../../config/vars";

export const style = css`
  max-width: 840px;
  margin: auto;
  padding-bottom: 4rem;
  img {
    width: 100%;
  }
  p {
    color: ${colors.textColor};
    font-size: 1.375rem;
  }
`;