import R from 'ramda';
import { createReducer } from '../utils/reducer.js';

export const setTravelViewMode = mode => ({
  type: 'SET_TRAVEL_VIEW_MODE',
  payload: {
    mode,
  },
});

const initialState = {
  language: 'en',
  mode: 'card',
};

export const application = createReducer({

  SET_TRAVEL_VIEW_MODE: (state, action) =>
    R.compose(
      R.set(R.lensProp('mode'), action.payload.mode),
    )(state),

}, initialState);
