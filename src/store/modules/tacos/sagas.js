import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';

function* createTaco({ payload }) {
  if (!payload) return;

  let formErrors = false;
  const { tacoName, imageUrl, ingredients } = payload;

  if (tacoName.length < 3 || tacoName.length > 255) {
    toast.error('Taco name must have between 3 and 255 characters');
    formErrors = true;
  }

  if (imageUrl.length < 6 || imageUrl.length > 300) {
    toast.error('Image URL must have between 6 and 300 characters');
    formErrors = true;
  }

  if (ingredients.length < 1) {
    toast.error('Select at least one ingredient');
    formErrors = true;
  }

  if (formErrors) {
    yield put(actions.createTacoFailure());
    return;
  }

  try {
    const response = yield call(axios.post, '/designTaco/taco', { name: tacoName, url: imageUrl, ingredients });
    toast.success('Taco created successfully');
    yield put(actions.createTacoSuccess(response.data));
    history.push('/orders');
  } catch (err) {
    const status = err.response?.status || 0;
    if (status === 400) {
      toast.error('Invalid data');
      yield put(actions.createTacoFailure(err.response?.data || 'Invalid data'));
      return;
    }

    toast.error(err.response?.data || 'Error creating taco');
    yield put(actions.createTacoFailure(err.response?.data || 'Error creating taco'));
  }
}

function* deleteTaco(action) {
  try {
    const { id, index } = action.payload;
    yield call(axios.delete, `/designTaco/taco/${id}`);
    yield put(actions.deleteTacoSuccess(index));
    toast.success('Taco deleted successfully');
  } catch (err) {
    const status = get(err, 'response.status', 0);
    if (status === 401) {
      toast.error('You need to log in again');
    } else {
      toast.error('An error occurred');
    }
    yield put(actions.deleteTacoFailure(err));
  }
}

function* updateTaco({ payload }) {
  try {
    const { id, name, url, ingredients } = payload;

    yield call(axios.put, `/designTaco/taco/${id}`, {
      name,
      url,
      ingredients,
    });

    toast.success('Taco updated successfully!');
    yield put(actions.updateTacoSuccess({ id, name, url, ingredients }));
    history.push('/orders');
  } catch (err) {
    toast.error('Error updating taco');
    yield put(actions.updateTacoFailure(err));
  }
}

export default all([
  takeLatest(types.CREATE_TACO_REQUEST, createTaco),
  takeLatest(types.DELETE_TACO_REQUEST, deleteTaco),
  takeLatest(types.UPDATE_TACO_REQUEST, updateTaco),
])
