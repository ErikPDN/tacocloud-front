import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  background: #ffffff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

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
    width: 100%;
    
    &:focus {
      border: 2px solid #C91756;
      outline: none;
    }
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
    margin-top: 20px;
    
    &:hover {
      background: #a01346;
    }
  }
`;
