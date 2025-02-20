import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const GlobalStyle = createGlobalStyle`


  
// h1
${
  "" /* .cabin-<uniquifier> {
  font-family: "Cabin", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
} */
}

// h2, h3, h4, h5, h6
${
  "" /* 
.source-sans-3-<uniquifier> {
  font-family: "Source Sans 3", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
} */
}

// p, a, li
${
  "" /* .mitr-extralight {
  font-family: "Mitr", serif;
  font-weight: 200;
  font-style: normal;
}

.mitr-light {
  font-family: "Mitr", serif;
  font-weight: 300;
  font-style: normal;
}

.mitr-regular {
  font-family: "Mitr", serif;
  font-weight: 400;
  font-style: normal;
}

.mitr-medium {
  font-family: "Mitr", serif;
  font-weight: 500;
  font-style: normal;
}

.mitr-semibold {
  font-family: "Mitr", serif;
  font-weight: 600;
  font-style: normal;
}

.mitr-bold {
  font-family: "Mitr", serif;
  font-weight: 700;
  font-style: normal;
}
 */
}



  html {
    /* colors */
  --color-elegance: #09141d;
  --color-black: #000;
  --color-primary: #12273c;
  --color-secondary: #183f60;
  --color-tertiary: #183f60;
  --color-quaternary: #20639a;
  --color-quinary: #2679bd;
  --color-senary: #72b1e4;
  --color-septenary: #72b1e4;
  --color-octonary: #a7d2f4;
  --color-nonary: #ddeffd;
  --color-denary: #f2f6ff;
  --color-white: #fff;
  --color-orange: #c44536;
  --color-yellow: #ffa210;
  --color-red: #772e25;
  --color-btn: var(--color-yellow);
  --color-discount: rgb(16, 123, 30);
  --color-active: #18f134;
  --color-text: rgb(226, 232, 240); 
  --fifth-color: #ede0d4;
  --sixth-color: #281c0e;
  --light-blue-color: #b1daec;
  --very-light-green-color: #f7fff8;
  --light-beige-color: #fff5ef;
  
  --dark-blue-color: #243662;
  --very-dark-blue-color: #2f3e46;
  --very-dark-green-color: #79a086;

  --yellow-light-color: #ffe3b3;
  --active-color: var(--orange-color);
  --color-hover: rgb(53 57 58);
  --color-yellow-hover: rgb(170, 119, 35);

  /* background-color */
  --main-background-color: rgba(15, 23, 42);

  /* radius */
  --border-radius-min: 5px;
  --border-radius-small: 6px;
  --border-radius-standard: 8px;
  --border-radius-circle: 50%;

  /* box-shadow */
  --box-shadow-null: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);
  --box-shadow-light: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2);
  --box-shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.5);
  --box-shadow-hard: 0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.9);

  /* transitions */
  --transition-fast: 0.1s;
  --transition-standard: 0.2s;
  --transition-medium: 0.5s;

  /* spacing */
  --padding-container: 10px 15px;
  --padding-nav-mobile: var(--padding-container);
  --padding-input: 5px 6px;
  --padding-btn: 8px 15px;
  }

  body, html, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    min-height: 100vh;
    background-color: var(--main-background-color);
  }

  #root {
    height: 100%;
    width: 100%;
    height: auto;
  }

  #main-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .outlet-content {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    min-height: calc(100vh);
    padding: 10px 0;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, .fs-1, .fs-2, .fs-3, .fs-4, .fs-5, .fs-6 {
    color: var(--color-denary);
  } 

  h1 {
    font-family: "Cabin", serif;
    color: var(--color-denary);

  } 
  
  h2, h3, h4, h5, h6, label {
    font-family: "Source Sans 3", serif;
    color: var(--color-denary);
  }

  p, a, ul, li, span, input, textarea {
    font-family: "Mitr", serif;
    font-size: 16px;
    color: var(--color-denary);
    font-weight: 200;
  } 

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--color-white);
    text-decoration-line: none;
  }

  button {
    color: var(--color-black);
  }
`;

export default GlobalStyle;
