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
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }
    }

    default:
      return state;
  }
}
