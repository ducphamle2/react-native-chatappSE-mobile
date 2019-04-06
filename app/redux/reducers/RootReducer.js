/**
 * @author DucPL
 */

import { combineReducers } from 'redux';
import LoginReducer from '../reducers/LoginReducer';

const appReducer = combineReducers( {
  LoginReducer
} )

// this RootReducer is used to wrap all the reducers into one, and store this inside a store.
const RootReducer = (state, action) => {
  if (action.type === 'LOG_OUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
}

export default RootReducer;