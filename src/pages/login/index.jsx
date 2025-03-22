import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/global';
import { Form } from './styled';
import Loading from '../../components/loading';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actions.loginRequest({ username, password }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' name="username" value={username} onChange={e => setUsername(e.target.value)} autoComplete='off' />
        <input type="password" name="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} autoComplete='off' />
        <button type="submit">Login</button>
      </Form>
    </Container>
  )
} 
