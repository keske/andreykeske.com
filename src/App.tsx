import * as React from 'react';

// Libs
import ReactGA from 'react-ga';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { Home, MandelbrotSet } from './containers';

ReactGA.initialize('UA-10906656-5');
ReactGA.pageview(window.location.pathname + window.location.search);

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mandelbrot-set">
          <MandelbrotSet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
