import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgrey;
        }
        body{
            font-family:'Montserrat',sans-serif;
            width:100%;
        }
        h2{
            font-size:2.5rem;
            font-family:'Abril Fatface', cursive;
            font-weight:lighter;
            color:#333;
        }
        h3{
            font-size:1.3rem;
            color:#333;
            padding:1rem 0rem;
        }
        p{
            font-size:1rem;
            line-height:200%;
            color:black;
        }
        a{
            text-decoration:none;
        }
        img{
            display:block;
        }
    }


`;
export default GlobalStyle;
