import * as React from 'react';

// Libs
import ReactGA from 'react-ga';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import {
  Home,
  MandelbrotSet,
  VolumeResize,
  VolumeScroll,
  ZenosParadox,
} from './containers';

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
        <Route path="/volume-resize">
          <VolumeResize />
        </Route>
        <Route path="/volume-scroll">
          <VolumeScroll />
        </Route>
        <Route path="/zenos-paradox">
          <ZenosParadox />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
