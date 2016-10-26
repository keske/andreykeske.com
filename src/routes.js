import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import Root from './components/Root';
import Home from './components/Pages/Home';

export default (
  <Route
    path="/"
    component={Root}
    history={browserHistory}
  >
    <IndexRoute component={Home} />
  </Route>
);
