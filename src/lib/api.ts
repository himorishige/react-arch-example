import axios from 'axios';

export const api = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
});

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    console.log(error);
    return Promise.reject({
      error: error.response,
    });
  },
);
