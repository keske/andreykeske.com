import request from 'superagent-bluebird-promise';

import dataPlaces from '../reducers/modules/data/places';
import dataWorks from '../reducers/modules/data/works';

/**
 * Load places
 *
 * Imitation get data with promise from api server
 */
export const apiLoadPlaces = () =>
  request
    .get('/app/reducers/modules/data/places.js')
    .promise()
    .then(() => dataPlaces);

/**
 * Load works
 *
 * Imitation get data with promise from api server
 */
export const apiLoadWorks = () =>
  request
    .get('/app/reducers/modules/data/works.js')
    .promise()
    .then(() => dataWorks);
