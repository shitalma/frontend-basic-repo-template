import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../components/landingPage/LandingPage';
import NotFoundPage from '../components/notFoundPage/NotFoundPage';

export class Routes extends Component {
  static propTypes = {
  };

  render() {
    return (
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route component={NotFoundPage} />
        </Switch>
    );
  }
}