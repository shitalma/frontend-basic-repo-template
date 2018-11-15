import React from 'react';

import createShallow from '@material-ui/core/test-utils/createShallow';
import MaterialButton from '@material-ui/core/Button';

import Button from './Button';

describe('<Button />', () => {
  const shallow = createShallow();

  it('should render Button', () => {
    const classes = { progress: 'random' };
    const wrapper = shallow(<Button classes={classes}>random</Button>).dive();
    expect(wrapper.find(MaterialButton)).toHaveLength(1);
  });
});
