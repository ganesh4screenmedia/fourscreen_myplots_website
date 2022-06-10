import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigate } from 'react-router-dom';

const Authenticate = function ({ children }) {
  return localStorage.getItem('token') ? children : <Navigate to="/AdminLogin" />;
};

export default Authenticate;
