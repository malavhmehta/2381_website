import {rgba} from "polished";

const primary = "#0052cc";
const secondary = "#172b4d";
const white = "#ffffff";
const light = rgba(primary, 0.5);

const theme = {
  colors: {
    primary,
    light,
    secondary,
    white
  },
  fonts: {
    body: "'Inter', -apple-system, system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Monaco, monospace",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    smd: "15px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xl2: "22px",
    xl3: "24px",
    xl4: "28px",
    xl5: "36px",
    xl6: "48px",
    heading: "70px"
  },
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200 
  },
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
  borderRadius: "5px",
  boxShadow: "0 1.5rem 4rem",
}

export default theme;
