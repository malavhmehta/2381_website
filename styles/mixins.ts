import {css} from "styled-components";
import theme from "./theme";
const {breakpoints} = theme;

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  const em = breakpoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${em}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
