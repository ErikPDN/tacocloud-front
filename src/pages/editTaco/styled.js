import { styled } from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  
  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 16px;
    
    &:focus {
      border: 2px solid #C91756;
      outline: none;
    }
  }

 input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type="number"] {
    -moz-appearance: textfield;
  }
  
  input::placeholder {
    color: #999;
  }
  
  button {
    height: 40px;
    background: #C91756;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
      background: #a01346;
    }
  }
`;
