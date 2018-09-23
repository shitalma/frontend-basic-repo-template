import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Routes from './Routes';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import UsersContainer from '../containers/users/UsersContainer';

xdescribe('Routes - ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <Routes />
      </MemoryRouter>,
    );
  });

  it('invalid path should redirect to 404', () => {
    expect(wrapper.find(UsersContainer)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });

  it('valid path should redirect to lending page', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(UsersContainer)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
});
