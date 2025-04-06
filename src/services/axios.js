import axios from 'axios';
import store from '../store';
import * as actions from '../store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : 0;

    if (status === 401) {
      store.dispatch(actions.logout());
    }

    return Promise.reject(error);
  }
);

export default api;
