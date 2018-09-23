import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from '../components/notFoundPage/NotFoundPage';
import LandingPageContainer from '../containers/LandingPageContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPageContainer} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
