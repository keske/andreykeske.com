import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Router onUpdate={ () => window.scrollTo(0, 0) }
            history={ createHistory() }
            children={ routes } />
  </Provider>,
  document.getElementById('root')
);
