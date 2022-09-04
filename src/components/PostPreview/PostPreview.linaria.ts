import { css } from "linaria";
import { colors } from "../../config/vars";

const borderWidth = 10;
const borderRadius = ".5rem";
export const style = css`
  img {
    max-width: 100%;
    border-radius: ${borderRadius};
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
    &:after {
      border: 1px solid ${colors.accentColor};
      position: absolute;
      transition: 200ms;
      border-radius: 0.5rem;
      content: "";
      top: ${borderWidth * 2}px;
      left: ${borderWidth * 2}px;
      right: -${borderWidth}px;
      bottom: ${borderWidth * 4}px;
      z-index: 0;
    }
  }
  a,
  a:visited {
    color: ${colors.darkColor};
  }
  a:hover,
  a:focus {
    outline: none;
    h2 {
      color: white;
    }
    text-decoration: none;
    &:after {
      background: ${colors.accentColor};
      bottom: -${borderWidth * 2}px;
      opacity: 1;
    }
  }
`;
