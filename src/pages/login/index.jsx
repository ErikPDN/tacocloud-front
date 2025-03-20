import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/global';
import { Form } from './styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input type="email" name="" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" name="" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </Form>
    </Container>
  )
} 
