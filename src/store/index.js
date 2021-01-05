import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from '../routes/history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
