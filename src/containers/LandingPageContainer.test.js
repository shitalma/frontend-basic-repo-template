import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import LandingPageContainer from './LandingPageContainer';

describe('Landing Page Container', () => {
  let mockStore;
  let landingPageContainerWrapper;
  const userData = [{ name: 'random', id: 'random' }];
  beforeEach(() => {
    mockStore = configureStore()({ landingPage: { userData } });

    landingPageContainerWrapper = shallow(
      <LandingPageContainer store={mockStore} />,
    );
  });

  it('should get user data from store', () => {
    expect(landingPageContainerWrapper.prop('userData')).toEqual(userData);
  });
});
