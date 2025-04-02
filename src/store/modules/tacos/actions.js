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
