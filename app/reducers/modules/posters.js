import R from 'ramda';

// Utils
import { apiLoadPosters } from '../../utils/api';
import { createReducer } from '../utils/reducer';

const TYPE = 'POSTERS';
const defaultData = [];

const initialState = {
  data: defaultData,
};

export const loadPosters = () => ({
  type: `LOAD_${TYPE}`,
  payload: {
    data: apiLoadPosters(),
  },
});

const LPlaces = R.lensProp('data');

export const posters = createReducer({

  // Request
  [`LOAD_${TYPE}_REQUEST`]: state =>
    R.compose(
      R.set(LPlaces, defaultData),
    )(state),

  // Failure
  [`LOAD_${TYPE}_FAILURE`]: state =>
    R.compose(
      R.set(LPlaces, defaultData),
    )(state),

  // Success
  [`LOAD_${TYPE}_SUCCESS`]: (state, {
    payload: {
      data,
    },
  }) =>
    R.compose(
      R.set(LPlaces, data),
    )(state),

}, initialState);
