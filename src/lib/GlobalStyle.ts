import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: #FAFAFA;
  }

  &::-webkit-scrollbar {
  width: 4px;
}
 
&::-webkit-scrollbar-track {
}
 
&::-webkit-scrollbar-thumb {
  background-color: #E0E0E0;
  border-radius: 4px;
}

`;

export default GlobalStyles;
