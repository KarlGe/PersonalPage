import { css } from "@linaria/core";
import { animations, border, colors } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";

const externalLinkSquare = 126;

export const style = css`
  ul {
    padding: 0;
    padding-top: 2rem;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    row-gap: 2rem;
    max-width: 640px;
    margin: auto;
    li {
      list-style: none;
      text-align: center;
      width: 150px;
      ${mediaQueries.sm} {
      width: 200px;

      }
      img {
        height: ${externalLinkSquare}px;
        width: ${externalLinkSquare}px;
        object-fit: contain;
      }
      a {
        display: block;
        text-decoration: none;
        h2 {
          transition: ${animations.transition.default}ms;
          padding: 0 1rem;
        }
        &:hover,
        &:focus {
          h2 {
            border-radius: ${border.radius.default};
            background-color: ${colors.accentColor};
            color: ${colors.lightColor};
          }
        }
      }
    }
  }
`;
