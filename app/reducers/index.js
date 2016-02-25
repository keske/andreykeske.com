import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import { application } from './modules/application';
import { places } from './modules/places';
import { works } from './modules/works';

const rootReducer = combineReducers({
  routing: routeReducer,
  /* app reducers */
  application,
  places,
  works,
});

export default rootReducer;
