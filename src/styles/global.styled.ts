import { createGlobalStyle, css } from "styled-components";

import { COLOR, COMMON, FONT } from "styles";

export const GlobalStyle = createGlobalStyle`
  ${css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      margin: 0;

      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${FONT.SIZE.REGULAR};

      color: ${FONT.COLOR.PRIMARY};
      background-color: ${COLOR.BGC.PRIMARY};
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    a {
      text-decoration: none;
      color: ${FONT.COLOR.PRIMARY};

      transition: ${COMMON.TRANSITION};
    }

    button {
      color: ${FONT.COLOR.PRIMARY};
      cursor: pointer;
      background: transparent;
      border: none;
    }

    ul,
    ol {
      list-style: none;
    }

    input {
      outline: none;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
    }
  `}
`;
