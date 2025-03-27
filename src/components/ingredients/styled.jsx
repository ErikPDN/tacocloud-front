import styled from 'styled-components';

import * as colors from '../../config/color';

export const CheckboxContainer = styled.fieldset`
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;
`;

export const CheckboxLegend = styled.legend`
  font-weight: bold;
  color: #333;
  padding: 0 10px;
  font-size: 1.1rem;
`;

export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px;
  
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 4px;
`;

export const StyledCheckbox = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${colors.primaryColor};
`;

export const IngredientName = styled.span`
  font-size: 1rem;
  color: #333;
margin-bottom: 14px;
`;
