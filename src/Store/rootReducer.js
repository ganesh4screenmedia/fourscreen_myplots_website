import { combineReducers } from 'redux';
import { common } from './reducers';

const appReducer = (state, actions) =>
  combineReducers({
    common,
  })(state, actions);

const rootReducer = (state, actions) => appReducer(state, actions);

export default rootReducer;
