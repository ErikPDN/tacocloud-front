import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav, Title, AuthButton } from './styled';

export default function Header() {

  return (
    <Nav>
      <Link to="/">
        <Title>Taco Cloud</Title>
      </Link>
      <Link to="/orders"><FaEdit size={26} /></Link>
      <Link to="/register">criar conta</Link>
      <Link to="/login"><AuthButton>Entrar</AuthButton></Link>
      <Link to="/login"><AuthButton>Sair</AuthButton></Link>
    </Nav>
  );
}
