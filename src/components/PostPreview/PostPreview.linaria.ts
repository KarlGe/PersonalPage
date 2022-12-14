import { css } from "@linaria/core";
import { border, colors } from "../../config/vars";

export const style = css`
  img {
    max-width: 100%;
    border-radius: ${border.radius.default};
  }

  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  a {
    transition: 200ms;
    text-decoration: none;
    display: block;
    position: relative;
    * {
      position: relative;
      z-index: 1;
    }
  }
  a,
  a:visited {
    color: ${colors.darkColor};
  }
  h2 {
    margin-bottom: 2.5rem;
  }
  a:hover,
  a:focus {
    outline: none;
    h2 {
      color: white;
    }
    text-decoration: none;
  }
`;
