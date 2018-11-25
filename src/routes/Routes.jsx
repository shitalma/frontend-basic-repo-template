import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from '../components/Error';
import LandingContainer from '../containers/LandingContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingContainer} />
    <Route component={Error} />
  </Switch>
);

export default Routes;
