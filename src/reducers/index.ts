import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import account from './account';

export default combineReducers({
  account,
  router,
});
