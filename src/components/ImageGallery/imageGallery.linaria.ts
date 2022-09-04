import { css } from "linaria";
import { colors } from "../../config/vars";

export const style = css`
  .image-gallery-thumbnail img {
    border-radius: 8px;
  }
  .image-gallery-svg * {
    color: white;
  }
  .image-gallery-thumbnail {
    transition: 200ms all;
    background-color: transparent;
    border-color: transparent;
    border-width: 0;
    border-bottom-width: 2px;
    margin-right: 4px;
    &:hover,
    &:focus,
    &.active {
      border-bottom-color: ${colors.accentColor};
      padding-bottom: 5px;
    }
  }
`;
