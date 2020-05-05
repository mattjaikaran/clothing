import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Palanquin';
    padding: 0;
    margin: 0;

    @media screen and (max-width: 959px) {
      padding: 0;
    }
    @media screen and (min-width: 1200px) {
      // margin: 0;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
  .MuiButton-root {
    border-radius: 0 !important;
  }
 
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    font-family: 'Suranna', serif !important;
    font-weight: 400;
    text-align: center;
    line-height: 40px;
  }
`
