import { css } from "linaria";
import { colors } from "../../config/vars";

const borderWidth = 10;

export const style = css`
  max-width: 840px;
  margin: auto;
  padding-bottom: 4rem;
  img {
    width: 100%;
  }
  .title-wrapper {
    h1 {
      position: relative;
      z-index: 100;
      margin-top: 1rem;
    }
    position: relative;
  }
`;
