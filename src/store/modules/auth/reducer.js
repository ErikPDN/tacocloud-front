// import * as types from '../types';
// import axios from '../../../services/axios';
//
// const initial_state = {
//   isLoggedIn: false,
//   token: '',
//   user: {},
//   isLoading: false,
// }
//
// export default function auth(state = initial_state, action) {
//   switch (action.type) {
//     case types.LOGIN_REQUEST: {
//       const newState = { ...state };
//       newState.isLoading = true;
//       return newState;
//     }
//
//     case types.LOGIN_FAILURE: {
//       delete axios.defaults.headers.Authorization;
//       const newState = { ...initial_state };
//       return newState;
//     }
//
//     case types.LOGIN_SUCCESS: {
//       const newState = { ...state };
//       newState.isLoggedIn = true;
//       newState.token = action.payload.token;
//       newState.user = action.payload.user;
//       newState.isLoading = false;
//       axios.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
//       return newState;
//     }
//   }
// }
