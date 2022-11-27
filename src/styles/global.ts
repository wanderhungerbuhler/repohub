import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { margin:0; padding:0; box-sizing:border-box; outline: none; }

  img { width: 100%; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background: #121212;
  }

  a { text-decoration: none; color: inherit; }
`;
