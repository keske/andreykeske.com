import R from 'ramda';
import { getErrors } from './error.js';

export const statusRequest = R.assoc('isFetching', true);
export const statusSuccess = R.compose(R.assoc('errors', {}), R.assoc('isFetching', false));
export const statusFailure = (err) => R.compose(
    R.assoc('status', R.prop('status', err)),
    R.assoc('errors', getErrors(err)),
    R.assoc('isFetching', false)
);
