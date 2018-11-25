import { compose, createStore } from 'redux';
import appReducer from './index';

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  {},
  compose(window.devToolsExtension ? window.devToolsExtension() : noOp => noOp),
);

export default store;
