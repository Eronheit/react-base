import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
  };
  body{
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar-thumb {
      background: #b6c2e4ad;
      border-radius: 5px;
    }
    ::-webkit-scrollbar {
      max-width: 6px;
      width: 6px !important;
      background: transparent;
    }
  }
  button {
    cursor: pointer;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
`;
