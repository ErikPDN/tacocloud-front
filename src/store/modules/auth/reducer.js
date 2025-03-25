import * as types from '../types';
import axios from '../../../services/axios';

const initial_state = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
}

export default function auth(state = initial_state, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      return { ...initial_state };
    }

    case types.LOGIN_SUCCESS: {
      axios.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false
      };
    }

    case types.REGISTER_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.REGISTER_FAILURE: {
      return { ...state, isLoading: false };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false
      }
    }

    case types.UPDATE_USER_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.UPDATE_USER_FAILURE: {
      return { ...state, isLoading: false };
    }

    case types.UPDATE_USER_SUCCESS: {
      const newState = { ...state };
      newState.user.username = action.payload.username;
      newState.user.fullName = action.payload.fullName;
      newState.user.street = action.payload.street;
      newState.user.city = action.payload.city;
      newState.user.state = action.payload.state;
      newState.user.zip = action.payload.zip;
      newState.user.phoneNumber = action.payload.phoneNumber;
      newState.isLoading = false;
      return newState;
    }

    default:
      return state;
  }
}
