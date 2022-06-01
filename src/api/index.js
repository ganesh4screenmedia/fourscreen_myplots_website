/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const parsedError = (response) => {
  let message = response?.data?.message || 'Something unexpected happened!';

  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  if (response?.status === 401) {
    return Promise.reject({
      message: message || 'Your session is expired. Please Login.',
      status: response?.status,
    });
  }
  if (response?.status === 404) {
    return Promise.reject({
      message: message || 'Resource not found!',
      status: response?.status,
    });
  }
  let errorMessage = '';
  const errorData = response?.data?.error;

  if (errorData) {
    delete errorData?.config;
    delete errorData?.stack;
    errorMessage = JSON.stringify(errorData);
  }

  return Promise.reject({
    message: errorMessage.length ? `${errorMessage}. ${message}` : message,
    status: response?.status,
  });
};

const parseBody = (response) => {
  if (response && (response?.data === null || response.data === undefined)) {
    return Promise.reject({ message: 'Resource Not Found' });
  }

  let exception = true;

  if (response.data && (response?.status === 200 || response?.status === 201)) {
    exception = false;
  }

  return exception ? parsedError(response) : response?.data;
};

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['content-type'] = 'application/json';

    return config;
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  (response) => {
    const result = parseBody(response);

    return result;
  },
  (error) => {
    console.log(error, '--rrrrrtttt--');

    return parsedError(error?.response);
  }
);

const tokenizedAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

tokenizedAxiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['content-type'] = 'application/json';

    return config;
  },
  (error) => Promise.reject(error)
);

tokenizedAxiosInstance.interceptors.response.use(
  (response) => {
    const result = parseBody(response);

    return result;
  },
  (error) => parsedError(error?.response)
);

export const setTokenForPrivate = (token) => {
  if (token) {
    tokenizedAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export const api = instance;
export const privateApi = tokenizedAxiosInstance;
