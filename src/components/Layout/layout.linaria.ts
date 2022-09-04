import { css } from "linaria";
import { colors } from "../../config/vars";

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
  }
`;

export const layoutStyle = css`
  background-color: #ffffff;
  margin: 1.25rem;
  min-height: 100%;
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
      display: block;
      margin: auto;
      content: "";
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
      font-size: 3.6rem;
      text-transform: uppercase;
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
          a.current,
          a.current:visited {
            color: ${colors.accentColor};
          }
        }
      }
    }
  }
  &.post {
    header {
      max-width: 840px;
      margin: auto;
      .header-start {
        display: flex;
        gap: 2rem;
      }
      h1 {
        text-align: left;
        a {
          font-size: 1.5rem;
        }
      }
      .site-description {
        display: none;
      }
      h2 {
        font-size: 3rem;
        margin-top: 1rem;
        text-align: left;
        margin-bottom: 1rem;
      }
      &:after {
        margin-left: 0;
        margin-bottom: 0;
      }
    }
  }
`;
