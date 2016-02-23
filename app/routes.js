import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Travel from './containers/Travel';
import Place from './containers/Place';
import Works from './containers/Works';
import Work from './containers/Work';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path=":language/about" component={About} />
    <Route path=":language/travel/:mode" component={Travel} />
    <Route path=":language/places/:year/:month/:city" component={Place} />
    <Route path=":language/works" component={Works} />
    <Route path=":language/works/:work" component={Work} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
