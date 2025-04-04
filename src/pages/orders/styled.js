import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NewOrder = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px 0;
  margin-left: 10px;
`

export const OrderContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #cccccc;
  }
`
