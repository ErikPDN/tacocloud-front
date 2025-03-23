import React from 'react';
import { FaEdit, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import history from '../../services/history';
import { Nav, Title, AuthButton } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.user.id);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/login');
  }

  return (
    <Nav>
      <Link to="/">
        <Title>Taco Cloud</Title>
      </Link>
      <Link to="/orders">
        <FaEdit size={26} />
      </Link>
      {isLoggedIn ? (
        <>
          <Link to={`/user/${userId}/edit`} >
            <FaUserAlt size={24} />
          </Link>
          <Link to="/login" onClick={handleLogout}>
            <AuthButton>Sair</AuthButton>
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">criar conta</Link>
          <Link to="/login">
            <AuthButton>Entrar</AuthButton>
          </Link>
        </>
      )}
    </Nav>
  );
}
