import * as types from '../types.js';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function registerSuccess(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}

export function updateUserRequest(payload) {
  return {
    type: types.UPDATE_USER_REQUEST,
    payload,
  }
}

export function updateUserSuccess(payload) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload,
  }
}

export function updateUserFailure(payload) {
  return {
    type: types.UPDATE_USER_FAILURE,
    payload,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
