import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';

function* registerRequest({ payload }) {
  if (!payload) return;

  let formErrors = false;

  if (payload.username.length < 2 || payload.username.length > 100) {
    formErrors = true;
    toast.error('Username must have between 3 and 255 characters');
  }

  if (payload.password.length < 6 || payload.password.length > 50) {
    formErrors = true;
    toast.error('Password must have between 6 and 50 characters');
  }

  if (formErrors) return;

  try {
    yield call(axios.post, '/register', {
      username: payload.username,
      password: payload.password,
    });

    toast.success('Account created successfully');
    yield put(actions.registerSuccess({ username: payload.username, password: payload.password }));
    history.push('/login');
  } catch (err) {
    const status = get(err, 'response.status', 0);

    if (status === 409) {
      toast.error('Username already exists');
      return;
    }

    if (status === 400) {
      toast.error('Invalid data');
      return;
    }

    yield put(actions.registerFailure());
  }
}

