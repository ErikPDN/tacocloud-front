import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';

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

  if (payload.password !== payload.confirmPassword) {
    formErrors = true;
    toast.error('Passwords do not match');
  }

  if (formErrors) {
    yield put(actions.registerFailure());
    return;
  }

  try {
    yield call(axios.post, '/auth/register', {
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
      yield put(actions.loginFailure());
      return;
    }

    if (status === 400) {
      toast.error('Invalid data');
      yield put(actions.loginFailure());
      return;
    }

    yield put(actions.registerFailure());
    toast.error(err.response?.data || 'Error creating account');
  }
}

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/auth/login', payload);

    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login successful');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath || '/');
  } catch (err) {
    toast.error('Invalid username or password');
    yield put(actions.loginFailure());
  }
}

function* updateUserRequest({ payload }) {
  if (!payload) return;

  let formErrors = false;

  const { username, fullName, street, state, zip } = payload;

  if (username.length < 3 || username.length > 255) {
    toast.error('Username must have between 3 and 255 characters');
    formErrors = true;
  }

  if (fullName.length < 6 || fullName.length > 255) {
    toast.error('Full name must have between 6 and 255 characters');
    formErrors = true;
  }

  if (street.length < 3 || street.length > 255) {
    toast.error('Street must have between 3 and 255 characters');
    formErrors = true;
  }

  if (state.length < 2 || state.length > 2) {
    toast.error('State must have 2 characters');
    formErrors = true;
  }

  if (zip.length < 8 || zip.length > 8) {
    toast.error('Zip must have 8 characters');
    formErrors = true;
  }

  if (formErrors) {
    yield put(actions.updateUserFailure());
    return;
  }

  try {
    const response = yield call(axios.put, '/user/', payload);

    yield put(actions.updateUserSuccess(response.data));
    toast.success('User updated successfully');

    history.push('/');
  } catch (err) {
    const status = get(err, 'response.status', 0);
    const errors = get(err, 'response.data.errors', []);

    if (status === 400) {
      if (Array.isArray(errors)) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error(errors);
      }
    } else {
      toast.error('Error updating user');
    }

    yield put(actions.updateUserFailure());
  }
}

export default all([
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, ({ payload }) => {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }),
  takeLatest(types.UPDATE_USER_REQUEST, updateUserRequest),
])

