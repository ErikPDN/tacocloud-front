import * as types from '../types';

const initial_state = {
  tacos: [],
  isLoading: false,
  error: null,
}

export default function tacos(state = initial_state, action) {
  switch (action.type) {
    case types.CREATE_TACO_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.CREATE_TACO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        tacos: [...state.tacos, action.payload],
      };
    }

    case types.CREATE_TACO_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
}
