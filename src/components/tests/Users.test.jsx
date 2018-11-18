import React from 'react';
import { shallow } from 'enzyme';

import Users from '../Users';

describe('Users page', () => {
  let wrapper;
  let props;
  const users = [
    {
      userId: 10,
      userName: 'DuBuque',
    },
    {
      userId: 11,
      userName: 'Clementina',
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
    expect(wrapper.find('WithStyles(Button)')).toHaveLength(2);
  });
});
