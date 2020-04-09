import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Palanquin';
    padding: 20px 60px;
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (max-width: 767px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
  .MuiButton-root {
    border-radius: 0 !important;
  }

  * {
    box-sizing: border-box;
  }
`
