import request from 'superagent-bluebird-promise';

import R from 'ramda';
import { statusRequest } from '../utils/request.js';
import { createReducer } from '../utils/reducer.js';

const initialState = {
  places: [],
};

export const apiLoadPlaces = () =>
  request
  .get('/app/reducers/modules/data/places.js')
  .promise()
  .then(response => response.text);

export const loadPlaces = () => ({
  type: 'LOAD_PLACES',
  payload: {
    places: apiLoadPlaces(),
  }
});

// console.log(initialState)

const LPlaces = R.lensProp('places');
const LState = R.lensProp('state');

export const places = createReducer({

  LOAD_PLACES_REQUEST: (state, action) => {
    console.log('request');

   return R.compose(
      // R.set(R.lensProp('mode'), action.payload.mode),
        // R.set(LPlaces, 'asdsadasd'),
        R.set(R.lensProp('places'), []),
        // R.over(LState, statusRequest)
    )(state)
  },

  LOAD_PLACES_FAILURE: (state) => {
    console.log('fail');
    return R.compose(
      R.set(LPlaces, {}),
      R.over(LState, statusFailure(payload))
    )(state)
  },

  LOAD_PLACES_SUCCESS: (state, {
    payload: {
      places
    }
  }) => {
    console.log('success');

    return R.compose(
      R.set(LPlaces, places),
      // R.over(LState, statusSuccess)
    )(state)
  },

}, initialState);
