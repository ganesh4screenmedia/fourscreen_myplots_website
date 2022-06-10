import { API_URLS, requestMethod } from '../Constants/apiConstants';
import { doApiCall } from './doApiCall';
import { api, privateApi } from './index';

const axios = require('axios');

export const adminLogin = (requestBody) =>
  new Promise((resolve, reject) => {
    doApiCall(api, requestMethod.post, API_URLS.adminLogin, requestBody)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getReports = (requestBody) => {
  const url = `${API_URLS.getReports}startCount=${requestBody.startCount}&limit=${requestBody.limit}`;

  return new Promise((resolve, reject) => {
    doApiCall(privateApi, requestMethod.get, url, '')
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const adminLogout = () =>
  new Promise((resolve, reject) => {
    doApiCall(privateApi, requestMethod.get, API_URLS.adminLogout)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });


export const getAdminJwtToken = (token) => (
  new Promise((resolve, reject) => {
    const config = {
      method: requestMethod.get,
      url: `${process.env.REACT_APP_BASE_URL}${API_URLS.getAdminJwtToken}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((res) => {
        localStorage.setItem('token', res?.data?.details?.newAdminToken);
        resolve(res?.data?.details?.newAdminToken)
      })
      .catch((err) => reject(err))
  })
)