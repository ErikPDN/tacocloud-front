import { all } from 'redux-saga/effects';

import authSagas from './auth/sagas';
import tacosSagas from './tacos/sagas';

export default function* rootSaga() {
  return yield all([
    authSagas,
    tacosSagas
  ]);
}
