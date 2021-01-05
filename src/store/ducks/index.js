import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { reducer as auth } from './auth';

export default (history) =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });
