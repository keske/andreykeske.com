import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import { application } from './application';
import { places } from './places';
import { works } from './works';

const rootReducer = combineReducers({
  routing: routeReducer,

  application,
  places,
  works,
});

export default rootReducer;
