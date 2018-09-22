import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const appReducer = combineReducers({});

const middlewares = [thunkMiddleware],
  rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middlewares),
    !IS_PRODUCTION_ENVIRONMENT && window.devToolsExtension
      ? window.devToolsExtension()
      : noOp => noOp,
  ),
);

export default store;
