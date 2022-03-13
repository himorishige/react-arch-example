import axios from 'axios';
import { REACT_APP_API_URL } from 'src/config';

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);
