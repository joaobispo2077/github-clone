import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {

    ${({ theme }) => {
      const matrixKeyValueColors = Object.entries(theme);

      const colorsStyles = matrixKeyValueColors.reduce(
        (themeacc, [keyprop, valueprop]) => {
          themeacc += ` --${keyprop}: ${valueprop}; `;
          return themeacc;
        },
        '',
      );

      return colorsStyles;
    }}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--primary);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    color: var(--black);
  }

  ul, ol, li {
    list-style: none;
  }
`;
