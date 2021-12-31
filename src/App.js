import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './Router';
import { getConfiguredStore } from './Store/configureStore';
import { SnackBar } from './Components/CustomSnackBar';

const store = getConfiguredStore();

const Navigation = function () {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

const App = function () {
  return (
    <Provider store={store}>
      <Navigation />
      <SnackBar />
    </Provider>
  );
};

export default App;
