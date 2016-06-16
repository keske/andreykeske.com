import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import { application } from './modules/application';
import { places } from './modules/places';
import { works } from './modules/works';
import { posters } from './modules/posters';
import { streets } from './modules/streets';

const rootReducer = combineReducers({
  routing: routeReducer,
  /* app reducers */
  application,
  places,
  works,
  posters,
  streets,
});

export default rootReducer;
