import bg1 from "../imgs/bg1.jpg";
import bg2 from "../imgs/bg2.jpg";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background-color:black;
    background-image:url(${bg2});
    background-size:cover;
}
svg{
    display:inline;
}

`;
export default GlobalStyle;
