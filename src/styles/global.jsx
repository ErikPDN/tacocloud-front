import { createGlobalStyle, styled } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/color.js'
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background: ${primaryDarkColor};
  }
  
  html, body, #root { 
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    border-radius: 4px;
    color: #ffffff;
    padding: 10px 20px;
    font-weight: 700;
  }
  
  a {
    text-decoration: none;  
    color: ${primaryColor};
  }
  
  ul {
    list-style: none;
  }

  
`

export const Container = styled.section`
  max-width: 360px;
  background: #ffffff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`
