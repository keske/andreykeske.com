import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import About from './components/Pages/About';

// Travel
import Travel from './components/Pages/Travel';
import Place from './components/Pages/Place';

// Hacks
import Works from './components/Pages/Works';
import Work from './components/Pages/Work';

// Posters
import Posters from './components/Pages/Posters';

// Streets
import Streets from './components/Pages/Streets';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path=":language/about" component={About} />

    { /* Travel */ }
    <Route path=":language/travel/:mode" component={Travel} />
    <Route path=":language/places/:year/:month/:city" component={Place} />

    { /* Hacks */ }
    <Route path=":language/works" component={Works} />
    <Route path=":language/works/:work" component={Work} />

    { /* Posters */ }
    <Route path=":language/posters" component={Posters} />
    <Route path=":language/posters/:poster" component={Work} />

    { /* Streets */ }
    <Route path=":language/streets" component={Streets} />
    <Route path=":language/streets/:street" component={Work} />

    <Route status={404} path="*" component={About} />
  </Route>
);
