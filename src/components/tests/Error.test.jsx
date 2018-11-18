import React from 'react';
import { shallow } from 'enzyme';

import Error from '../Error';

describe('<Error />', () => {
  let wrapper;

  it('should render error message', () => {
    wrapper = shallow(<Error />);
    expect(wrapper.find('.error-message').text()).toEqual(
      'This is not valid page',
    );
  });
});
