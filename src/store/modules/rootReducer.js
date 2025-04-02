import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import tacosReducer from './tacos/reducer';

export default combineReducers({
  auth: authReducer,
  tacos: tacosReducer,
});
