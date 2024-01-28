import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
margin: 0;
padding: 0;
box-sizing: border-box;


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}



:root{
  font-size: 12px;

}
body{


    background-color: ${theme.BACKGROUND_BLUE};


}



`
export default GlobalStyles;
