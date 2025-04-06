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

    case types.DELETE_TACO_REQUEST:
      return { ...state, isLoading: true };

    case types.DELETE_TACO_SUCCESS: {
      const { index } = action.payload;
      const newTacos = [...state.tacos];
      newTacos.splice(index, 1);
      return {
        ...state,
        students: newTacos,
        isLoading: false
      };
    }

    case types.DELETE_TACO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}
