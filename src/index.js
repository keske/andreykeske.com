import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

export const history = browserHistory;

if (__CLIENT__) {
  ReactDOM.render(
    <Router history={history}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
}
