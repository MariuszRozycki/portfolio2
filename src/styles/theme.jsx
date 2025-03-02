import { ThemeProvider } from "styled-components";
import { breakpoints, device } from "./Breakpoints.jsx";

const theme = {
  padding: {
    container: "var(--padding-container)",
    input: "var(--padding-input)",
    btn: "var(--padding-btn)",
  },

  color: {
    footerParagraph: "var(--color-yellow)",
    productPrice: "var(--color-yellow)",
    productPriceBcg: "var(--color-quaternary)",
    productOldPriceBcg: "var(--color-secondary)",
    discount: "var(--color-discount)",
    active: "var(--color-yellow)",
  },

  backgroundColor: {
    btn: "var(--color-btn)",
    singleProduct: "var(--color-white)",
    header: "var(--color-elegance)",
    footer: "var(--color-elegance)",
    form: "var(--color-elegance)",
  },

  boxShadows: {
    null: "var(--box-shadow-null)",
    light: "var(--box-shadow-light)",
    medium: "var(--box-shadow-medium)",
    hard: "var(--box-shadow-hard)",
  },

  radius: {
    picture: "var(--border-radius-standard)",
    singleProduct: "var(--border-radius-standard)",
    btn: "var(--border-radius-small)",
    circle: "var(--border-radius-circle)",
  },

  transitions: {
    standard: "var(--transition-standard)",
  },

  breakpoints,
  device,
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
