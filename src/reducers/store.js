import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import appReducer from './index';

const middlewares = [thunkMiddleware];

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : noOp => noOp,
  ),
);

export default store;
