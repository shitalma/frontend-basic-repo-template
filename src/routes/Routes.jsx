import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import UsersContainer from '../containers/users/UsersContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={UsersContainer} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
