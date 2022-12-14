import { css } from "@linaria/core";
import { border, colors } from "../../config/vars";

export const style = css`
  .image-gallery-slides {
    border-radius: ${border.radius.default};
    overflow: hidden;
    img {
      border-radius: 0!important;
    }
  }
  .image-gallery-thumbnail img {
    border-radius: ${border.radius.default};
  }
  .image-gallery-svg * {
    color: white;
  }
  .image-gallery-thumbnail {
    transition: 200ms all;
    background-color: transparent;
    border-color: transparent;
    border-width: 0;
    border-bottom-width: 1px;
    margin-right: 4px;
    &:hover,
    &:focus,
    &.active {
      border-bottom-color: ${colors.accentColor};
      padding-bottom: 5px;
    }
  }
`;
