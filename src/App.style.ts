import styled ,{createGlobalStyle} from "styled-components"




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

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
>p{
    color: #fff
}

.score{
    color:  #fff;
    font-size:2rem;
    margin: 0;
}

h1{
    font-family:  Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip:  text;
    -webkit-background-clip:text; 
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
}


.start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  } 
  .start {
    max-width: 200px;
  }
`