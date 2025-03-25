import React, { useState, useEffect, useCallback } from 'react';
import Cleave from 'cleave.js/react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Container } from '../../styles/global';
import axios from '../../services/axios';
import Loading from '../../components/loading';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function User() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.user.id);
  const [username, setUsername] = useState('');
  const [fullName, setFullname] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const isLoading = useSelector(state => state.auth.isLoading);

  const getUser = useCallback(async () => {
    if (!id) return;
    try {
      const { data } = await axios.get(`/user/${id}`);
      setUsername(data.username || '');
      setFullname(data.fullName || '');
      setStreet(data.street || '');
      setCity(data.city || '');
      setState(data.state || '');
      setZip(data.zip || '');
      setPhoneNumber(data.phoneNumber || '');
    } catch (err) {
      const status = get(err, 'response.status', []);
      const errors = get(err, 'response.data.errors', []);
      if (status === 400) {
        (Array.isArray(errors) ? errors : [errors]).forEach(error => toast.error(error));
      }
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id, getUser]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!id) return;
    dispatch(actions.updateUserRequest({ id, username, fullName, street, city, state, zip, phoneNumber }));
  }, [id, username, fullName, street, city, state, zip, phoneNumber, dispatch]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>User</h1>
      <Form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
        <input type="text" value={fullName} onChange={e => setFullname(e.target.value)} placeholder="Fullname" />
        <input type="text" value={street} onChange={e => setStreet(e.target.value)} placeholder="Street" />
        <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
        <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="State" />
        <input type="text" value={zip} onChange={e => setZip(e.target.value)} placeholder="Zip" />

        <Cleave
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          options={{
            numericOnly: true,
            delimiters: ['(', ') ', '-', ''],
            blocks: [0, 2, 5, 4],
          }}
          placeholder="(99) 99999-9999"
        />

        <button type="submit">Save</button>
      </Form>
    </Container>
  );
}

