import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  body {
    font-size: 16px;
    color: #909090;
    -webkit-font-smoothing: antialiased;
    line-height: 1;

    background: url(/assets/images/linhas.png), 
    url(/assets/images/background-form.png) no-repeat top right,
    url(/assets/images/background2.png) repeat, 
    url(/assets/images/background.png) top;
  }
  
  body, input, textarea, button, select {
    font-family: "Montserrat", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font: inherit;
  }

  input {
    outline: none;
    font-size: inherit;
    color: inherit;

    &::placeholder {
      color: inherit;
    }
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: transparent;
  }
`;