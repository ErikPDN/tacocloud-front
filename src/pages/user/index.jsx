import React, { useState, useEffect, useCallback } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
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
  const [isLoading, setIsLoading] = useState(false);

  const getUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/user/${id}`);
      setUsername(data.username || '');
      setFullname(data.fullname || '');
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
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(actions.updateUserRequest({ username, fullName, street, city, state, zip, phoneNumber }));
  }, [username, fullName, street, city, state, zip, phoneNumber, dispatch]);

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

        <PhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          defaultCountry="BR"
          international={false}
          withCountryCallingCode={false}
          placeholder="Phone Number"
          inputComponent={(props) => (
            <input
              {...props}
              className="phone-input"
              style={{
                height: '40px',
                width: '100%',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '0 15px',
                fontSize: '16px',
              }}
            />
          )}
        />

        <button type="submit">Save</button>
      </Form>
    </Container>
  );
}

