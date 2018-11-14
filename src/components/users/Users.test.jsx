import React from 'react';
import { shallow } from 'enzyme';

import Users from './Users';

describe('Users page', () => {
  let wrapper;
  let props;
  const users = [
    {
      userId: 10,
      userName: 'Clementina DuBuque',
    },
  ];

  beforeEach(() => {
    props = {
      getUsers: jest.fn(),
      users,
    };
    wrapper = shallow(<Users {...props} />);
  });

  it('should call getUsers on component did mount', () => {
    expect(props.getUsers).toHaveBeenCalled();
  });

  it('should display user name', () => {
    const usersWrapper = wrapper.find('.js-userName');
    expect(usersWrapper.at(0).props().children[0]).toEqual(
      'Clementina DuBuque',
    );
  });
});
