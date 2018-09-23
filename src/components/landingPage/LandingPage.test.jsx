import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from './LandingPage';

describe('Landing page', () => {
  let wrapper;
  let props;
  const userData = [
    {
      userId: 10,
      userName: 'Clementina DuBuque',
    },
  ];

  beforeEach(() => {
    props = {
      getUsersData: jest.fn(),
      userData,
    };
    wrapper = shallow(<LandingPage {...props} />);
  });

  it('should call getUsersData on component did mount', () => {
    expect(props.getUsersData).toHaveBeenCalled();
  });

  it('should display user name', () => {
    const users = wrapper.find('.js-userName');
    expect(users.at(0).text()).toEqual('Clementina DuBuque');
  });
});
