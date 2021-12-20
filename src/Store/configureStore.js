import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

let store = null;

export const getConfiguredStore = () => {
  store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
};

export const dispatch = store && store.dispatch;
