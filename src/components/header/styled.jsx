import styled from 'styled-components';

import { primaryColor } from '../../config/color.js'

export const Nav = styled.nav` 
  background: ${primaryColor};
  width: 100%; 
  padding: 40px 20px;
  display: flex; 
  align-items: center;
  justify-content: space-between;

  a {
    color: #ffffff;
    margin: 0 10px;
    font-weight: bold;
  }
`
export const AuthButton = styled.button`
  background: ${primaryColor};
  border: 2px solid #fff; /* Borda branca */
  border-radius: 4px;
  color: #ffffff;
  padding: 10px 15px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: ${primaryColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
`
