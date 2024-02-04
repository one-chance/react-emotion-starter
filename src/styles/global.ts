import { css } from '@emotion/react';

export const globalStyle = css`
  * {
    box-sizing: border-box;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  :root {
    --color-primary: #775da6;
    --color-secondary: #196a73;
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray: gray;
    --color-green: green;
    --color-red: red;
    --color-dim: #0000004d;

    --color-black-900: #191919;
    --color-black-800: #202020;
    --color-black-700: #484848;
    --color-black-600: #666666;
    --color-black-500: #808080;
    --color-black-400: #999999;
    --color-black-300: #b2b2b2;
    --color-black-200: #cccccc;
    --color-black-100: #e6e6e6;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #root {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    position: relative;
  }

  html[color-theme='light'] {
    background-color: #ffffff;

    --background-color: #ffffff;
    --text-color: var(--color-black);
    --icon-color: var(--color-black);
  }

  html[color-theme='dark'] {
    background-color: #202020;

    --background-color: #202020;
    --text-color: var(--color-white);
    --icon-color: var(--color-white);
  }
`;
