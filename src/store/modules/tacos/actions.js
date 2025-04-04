import * as types from '../types';

export function createTacoRequest(payload) {
  return {
    type: types.CREATE_TACO_REQUEST,
    payload,
  }
}

export function createTacoSuccess(payload) {
  return {
    type: types.CREATE_TACO_SUCCESS,
    payload,
  }
}

export function createTacoFailure(payload) {
  return {
    type: types.CREATE_TACO_FAILURE,
    payload,
  }
}

export const deleteTacoRequest = (id, index) => ({
  type: types.DELETE_TACO_REQUEST,
  payload: { id, index }
});

export const deleteTacoSuccess = (index) => ({
  type: types.DELETE_TACO_SUCCESS,
  payload: { index }
});

export const deleteTacoFailure = (error) => ({
  type: types.DELETE_TACO_FAILURE,
  payload: { error }
});

