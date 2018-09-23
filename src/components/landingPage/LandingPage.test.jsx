import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from './LandingPage';

describe('Landing page', () => {
  let wrapper;
  let props;
  const userData = [
    {
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
      },
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
      },
      email: 'Rey.Padberg@karina.biz',
      id: 10,
      name: 'Clementina DuBuque',
      phone: '024-648-3804',
      username: 'Moriah.Stanton',
      website: 'ambrose.net',
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
