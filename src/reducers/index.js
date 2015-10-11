import { combineReducers } from 'redux';

import { application } from './application';
import { places } from './places';
import { works } from './works';

const rootReducer = combineReducers({
  application,
  places,
  works,
});

export default rootReducer;
