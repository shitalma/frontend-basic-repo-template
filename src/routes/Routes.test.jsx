import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import { Routes } from './Routes';
import LandingPage from '../components/landingPage/LandingPage';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';

describe('Routes - ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <Routes />
      </MemoryRouter>,
    );
  });

  it('invalid path should redirect to 404', () => {
    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });

  it('valid path should redirect to lending page', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
});
