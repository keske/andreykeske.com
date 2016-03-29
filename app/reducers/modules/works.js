import R from 'ramda';

// Utils
import { apiLoadWorks } from '../../utils/api';
import { createReducer } from '../utils/reducer';

const TYPE = 'WORKS';
const defaultData = [];

const initialState = {
  data: defaultData,
};

export const loadWorks = () => ({
  type: `LOAD_${TYPE}`,
  payload: {
    data: apiLoadWorks(),
  },
});

const LPlaces = R.lensProp('data');

export const works = createReducer({

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
