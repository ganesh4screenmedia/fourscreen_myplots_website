import { API_URLS, requestMethod } from '../Constants/apiConstants';
import { doApiCall } from './doApiCall';
import { api, privateApi } from './index';

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
