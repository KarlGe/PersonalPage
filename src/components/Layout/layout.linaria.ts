import { makeOffsetBorderPosition } from "./global.linaria";
import { css } from "linaria";
import { border, colors, shadows, sizes } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";

export const layoutStyle = css`
  background-color: ${colors.lightColor};
  min-height: 100%;
  ${mediaQueries.sm} {
    margin: 1.25rem;
  }
  .main-content {
    opacity: 0;
  }
  &.loaded {
    .main-content {
      transition: opacity 250ms;
      opacity: 1;
    }
  }
  main,
  header {
    max-width: 1140px;
    margin: auto;
  }
  header {
    text-align: center;
    padding: 1rem 0;
    margin-bottom: 2rem;
    &:after {
      border-bottom: 2px solid ${colors.darkColor};
      width: 400px;
      margin: auto;
      display: block;
      content: "";
      width: 80%;
      margin-bottom: 0;
    }
    h1 {
      margin: 0;
    }
    a:hover,
    a:focus {
      outline: none;
    }
    .page-title,
    .page-title:visited {
      color: ${colors.textColor};
      text-decoration: none;
      font-weight: 900;
      font-size: 2rem;
      text-transform: uppercase;
      ${mediaQueries.sm} {
        font-size: 3.6rem;
      }
      &:hover,
      &:focus {
        color: ${colors.accentColor};
      }
    }
    p {
      margin: 0.5rem;
    }
    nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 1rem;
      font-weight: 900;
      z-index: 1;
      padding: 0.5rem;
      box-shadow: ${shadows.default};
      background: ${colors.accentColor};
      ul {
        display: flex;
        justify-content: center;
        gap: 1rem;
        text-transform: uppercase;
        padding: 0;
        li {
          list-style: none;
          a,
          a:visited {
            color: ${colors.lightColor};
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: 100ms ease-in-out;
            ${mediaQueries.sm} {
              color: ${colors.darkColor};
            }
          }
          a.active,
          a:hover,
          a:focus {
            text-decoration: none;
            border-bottom-color: ${colors.lightColor};
            ${mediaQueries.sm} {
              color: ${colors.accentColor};
            }
          }
          ${mediaQueries.sm} {
            a:focus {
              border-bottom-color: ${colors.accentColor};
            }
          }
        }
      }
      ${mediaQueries.sm} {
        position: relative;
        bottom: unset;
        left: unset;
        right: unset;
        background: none;
        box-shadow: none;
      }
    }
  }
  .main-content {
    max-width: ${sizes.contentWidthWide}px;
    margin: auto;
    padding: 0 1rem;
    padding-bottom: 4rem;
    ${mediaQueries.md} {
      padding: 0;
    }
  }
  opacity: 0;
  &.post, &.about, &.default {
    opacity: 1;
  }
  &.post,
  &.about {
    header,
    .main-content {
      margin: auto;
      max-width: ${sizes.contentWidth}px;
      img {
        border-radius: ${border.radius.default};
      }
    }
  }
  &.post {
    header {
      .header-start {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        ${mediaQueries.sm} {
          justify-content: flex-start;
          align-items: baseline;
          gap: 2rem;
          padding: 0;
        }
      }
      h1 {
        a {
          font-size: 1.125rem;
          ${mediaQueries.sm} {
            font-size: 2rem;
          }
        }
      }
      .site-description {
        display: none;
      }
      h2 {
        font-size: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      &:after {
        margin: 0 1rem;
      }
      ${mediaQueries.sm} {
        h1 {
          font-size: 1.5rem;
          text-align: left;
        }
        h2 {
          font-size: 3rem;
          margin-left: 1rem;
          margin-top: 1rem;
          text-align: left;
          margin-bottom: 1rem;
        }
        &:after {
          margin: 0;
        }
      }
    }
  }
`;
