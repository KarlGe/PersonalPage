import { css } from "linaria";
import { mediaQueries } from "../../helpers/styleHelpers";

export const aboutStyle = css`
  img {
    width: 100px;
    border-radius: .5rem;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
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
