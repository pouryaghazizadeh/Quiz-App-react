import styled ,{createGlobalStyle} from "styled-components"

// const BGImg = st


export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    margin: 0;
    padding: 0 20px;
   
background-image: url("https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__480.jpg");
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
}
*{
    box-sizing: border-box;
    font-family: "catameran", sans-serif;
}
`