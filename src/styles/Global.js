import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Nunito|Righteous|Ubuntu&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
  }`;

export default GlobalStyles;