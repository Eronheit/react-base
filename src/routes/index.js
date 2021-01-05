import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import Route from './Route';
import history from './history';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={Home} isPrivate />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
