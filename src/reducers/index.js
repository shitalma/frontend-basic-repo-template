import { combineReducers } from 'redux';

import landingPage from './landingPage/landingPage';

const appReducer = combineReducers({
  landingPage,
});

export default appReducer;
