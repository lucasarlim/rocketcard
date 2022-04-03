import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    @media (min-width: 1800px) {
      font-size: 32px;
    }

    @media (max-width: 1200px) {
      font-size: 16px;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  *, input, button {
    border: 0;
    outline: 0;
    font-family: 'SourceSansPro', sans-serif;
  }

  html, body, #root{
    height: 100vh;
  
    @media (max-width: 768px) {
        height: auto;
    }
  }

  :root {

    --background: linear-gradient(113.08deg, #5F3C9C 0%, #1F0A43 100%);
    --gradient: linear-gradient(180deg, rgba(95, 60, 156, 0.75) 0%, rgba(31, 10, 67, 0.75) 100%);
    --text: #F1F1F1;
    --purple: #8257E6;
    --title: #FFF;
    --border: #6542AB;
    
  }

`;
