import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from '../components/Error';
import UsersContainer from '../containers/users/UsersContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={UsersContainer} />
    <Route component={Error} />
  </Switch>
);

export default Routes;
