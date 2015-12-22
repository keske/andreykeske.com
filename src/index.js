import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import { syncReduxAndRouter } from 'redux-simple-router';

const store = configureStore();
const history = createHistory({
  queryKey: false,
});

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router onUpdate={ () => window.scrollTo(0, 0) }
      history={ history }>
      <Redirect from="/" to="en/about" />
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);
