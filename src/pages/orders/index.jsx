import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUtensils, FaEdit, FaWindowClose, FaPlusSquare } from 'react-icons/fa';

import { Container } from '../../styles/global';
import { NewOrder, OrderContainer, TacoPicture } from './styled';
import Loading from '../../components/loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/tacos/actions';


export default function Orders() {
  const [tacos, setTacos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTacos() {
      const response = await axios.get('/designTaco/taco');
      setTacos(response.data);
      setIsLoading(false);
    }

    fetchTacos();
  }, [])

  const handleDelete = (e, id, index) => {
    e.preventDefault();
    dispatch(actions.deleteTacoRequest(id, index));
    setTacos(currentTacos =>
      currentTacos.filter(taco => taco.id !== id)
    );
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Orders</h1>
      <NewOrder to="/">New Order <FaPlusSquare size={16} style={{ marginLeft: '10px', color: '#28a745' }} /></NewOrder>

      <OrderContainer>
        {tacos.map((taco, index) => (
          <div key={taco.id}>
            <TacoPicture>
              {taco.url ? (
                <img src={taco.url} alt="Taco" crossOrigin="anonymous" />
              ) : (
                <FaUtensils size={36} />
              )}
            </TacoPicture>
            <span>{taco.name}</span>

            {isLoggedIn ? (
              <>
                <Link to={`/taco/${taco.id}/edit`}><FaEdit size={16} style={{ color: '#007bff' }} /></Link>
                <Link onClick={(e) => handleDelete(e, taco.id, index)} to={`/designTaco/${taco.id}/delete`}>
                  <FaWindowClose size={16} />
                </Link>
              </>
            ) : ''}


          </div>
        ))}
      </OrderContainer>
    </Container >
  )
}

