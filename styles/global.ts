import { createGlobalStyle } from 'styled-components';
import NotoSansKR from '../fonts/NotoSansKR-VariableFont_wght.ttf';
import Inter from '../fonts/Inter-VariableFont_opsz,wght.ttf';

const GlobalStyle = createGlobalStyle`
  body {
    font-family : "NotoSansKR";
  }
  
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR');
    font-style: normal;
    src: url(${NotoSansKR}) format('truetype');
  }
  
  @font-face {
    font-family: 'Inter';
    src: local('Inter');
    font-style: normal;
    src: url(${Inter}) format('truetype');
  }

  // reset css
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  `;

export default GlobalStyle;
