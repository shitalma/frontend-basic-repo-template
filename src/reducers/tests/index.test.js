import { createStore } from 'redux';

import appReducer from '../index';

describe('Root reducer - ', () => {
  let combinedReducers;
  beforeEach(() => {
    const store = createStore(appReducer);
    combinedReducers = Object.keys(store.getState());
  });

  it('should contain the app reducers', () => {
    expect(combinedReducers).toContain('users');
  });
});
