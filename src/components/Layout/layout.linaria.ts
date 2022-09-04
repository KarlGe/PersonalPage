import { css } from "linaria";
import { colors, sizes } from "../../config/vars";
import { mediaQueries } from "../../helpers/styleHelpers";

export const globalStyles = css`
  :global() {
    html {
      box-sizing: border-box;
      min-height: 100%; /* make sure it is at least as tall as the viewport */
      position: relative;
    }
    html,
    body {
      background: ${colors.darkColor};
      padding: 0;
      margin: 0;
    }
    html,
    body,
    main,
    #__next {
      height: 100%; /* make sure it is at least as tall as the viewport */
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    * {
      font-family: "Source Sans Pro";
      color: ${colors.textColor};
    }
    p {
      color: ${colors.textColor};
      font-size: 1.125rem;
      ${mediaQueries.sm} {
        font-size: 1.375rem;
      }
    }
  }
`;

export const layoutStyle = css`
  background-color: #ffffff;
  min-height: 100%;
  ${mediaQueries.sm} {
    margin: 1.25rem;
  }
  main {
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
      text-decoration: underline !important;
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
    }
    p {
      margin: 0.5rem;
    }
    nav {
      font-size: 1rem;
      font-weight: 900;
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
            color: ${colors.textColor};
            text-decoration: none;
          }
          a.active,
          a:hover,
          a:focus {
            color: ${colors.accentColor};
          }
        }
      }
    }
  }
  .main-content {
    max-width: ${sizes.contentWidthWide}px;
    margin: auto;
    padding: 0 1rem;
    ${mediaQueries.md} {
      padding: 0;
    }
  }
  &.post,
  &.about {
    header,
    .main-content {
      margin: auto;
      max-width: ${sizes.contentWidth}px;
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
      nav {
        a {
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
