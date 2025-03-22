import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../styles/global';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/loading';
import history from '../../services/history';

export default function Register() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(actions.registerRequest({ username, password, confirmPassword }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
            required
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label htmlFor="confirm-password">
          Confirm Password:
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Criar Conta</button>

        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Already have an account?
          <span
            onClick={() => history.push('/login')}
            style={{ cursor: 'pointer', color: '#1a73e8', marginLeft: '5px' }}
          >
            Sign in
          </span>
        </p>
      </Form>
    </Container>
  );
}
