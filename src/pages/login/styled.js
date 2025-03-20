import { styled } from "styled-components";
import * as colors from "../../config/color";

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  
  input { 
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #cccccc;
  
    &:focus {
      border: 2px solid ${colors.primaryColor};
      outline: none;
    } 
  }
  
  button {
    width: 100%;
    padding: 16px 0;
    font-size: 16px;
    outline: none;
  }
`;


