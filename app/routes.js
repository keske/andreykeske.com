import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Travel from './components/Pages/Travel';
import Place from './components/Pages/Place';
import Works from './components/Pages/Works';
import Work from './components/Pages/Work';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path=":language/about" component={About} />
    <Route path=":language/travel/:mode" component={Travel} />
    <Route path=":language/places/:year/:month/:city" component={Place} />
    <Route path=":language/works" component={Works} />
    <Route path=":language/works/:work" component={Work} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
