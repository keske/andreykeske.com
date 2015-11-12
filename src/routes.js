import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  About,
  Travel,
  Place,
  Works,
  Work,
}
from './containers';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ About }/>
    <Route path=":language/about" component={ About } />
    <Route path=":language/travel/:mode" component={ Travel } />
    <Route path=":language/places/:year/:month/:city" component={ Place } />
    <Route path=":language/works" component={ Works } />
    <Route path=":language/works/:work" component={ Work } />
  </Route>
);
