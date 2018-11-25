/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import configureStore from 'redux-mock-store';

import { shallow } from 'enzyme';

import UsersContainer from '../LandingContainer';

describe('Landing Container', () => {
  let mockStore;
  let usersContainerWrapper;
  const data = [{ username: 'random', id: 'random' }];

  beforeEach(() => {
    mockStore = configureStore()({ users: { data } });
    usersContainerWrapper = shallow(<UsersContainer store={mockStore} />);
  });

  it('should get user data from store', () => {
    expect(usersContainerWrapper.prop('users')).toEqual([
      { userId: 'random', userName: 'random' },
    ]);
  });
});
