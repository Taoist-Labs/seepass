import { createGlobalStyle } from "styled-components";
import "../assets/style/font.css";

const GlobalStyle = createGlobalStyle`
  body,html{
    background: #FBF5EF;
    color: #000;
    padding: 0;
    margin: 0;
  
    //font-size: 14px;
  }
  dl,dt,ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  *{
    font-family:  "Inter-Regular",-apple-system,BlinkMacSystemFont,
    "Segoe UI",Roboto,"Helvetica Neue",
    Arial,sans-serif,"Apple Color Emoji",
    "Segoe UI Emoji","Segoe UI Symbol" ;


    scrollbar-width: none!important;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  
  a{
    text-decoration: none;
    color: #000;
  }
  .btn-primary{
    color:#fff;
    &:hover, &:focus-visible, &:active {
      color:#fff !important;
    }
    &:disabled{
      background-color: rgb(230, 228, 235);
      border-color: transparent;
      color: rgba(143, 155, 179, 0.48);
    }
  }
`;

export default GlobalStyle;
