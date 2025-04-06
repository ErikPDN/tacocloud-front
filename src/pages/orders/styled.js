import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NewOrder = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px 0;
  margin-left: 10px;
  color: #28a745;
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

export const TacoPicture = styled.div`
  img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }
`


