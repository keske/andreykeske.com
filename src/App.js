import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';
import * as reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import { Travel, Works, Place } from './components/';

const reducersApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducersApp);

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          {() =>
            <Router history={ history }>
              <Route path="/" component={ Main }>
                <Route path="/:language" component={ Main } />
                <Route path=":language/travel" component={ Travel } />
                <Route path=":language/works" component={ Works } />
                <Route path=":language/places/:year/:month/:city" component={ Place } />
              </Route>
            </Router>
          }
        </Provider>
    );
  }
}
