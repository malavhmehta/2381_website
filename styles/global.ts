import {createGlobalStyle} from "styled-components";
import {rgba} from "polished";
import theme from "./theme";

const {colors, fonts, fontSizes} = theme;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html {
    box-sizing: border-box;
    min-height: 100vh;
    scroll-behavior: smooth;
    width: 100%;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.secondary};
    font-family: ${fonts.body};
    font-size: ${fontSizes.sm};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100%;
  }

  ::selection {
    background-color: ${rgba(colors.primary, 0.1)};
  }
  
  #root {
    min-height: 100vh;
  }
`;
