import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    }
    button:focus {
    outline: 0;
    }
    body {
        background-color: #FFF;
    }
`

export const theme = {};