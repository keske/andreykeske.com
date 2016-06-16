import request from 'superagent-bluebird-promise';

// Data
import dataPlaces from '../reducers/modules/data/places';
import dataStreets from '../reducers/modules/data/streets';
import dataPosters from '../reducers/modules/data/posters';
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

/**
 * Load streets
 *
 * Imitation get data with promise from api server
 */
export const apiLoadStreets = () =>
  request
    .get('/app/reducers/modules/data/streets.js')
    .promise()
    .then(() => dataStreets);

/**
 * Load posters
 *
 * Imitation get data with promise from api server
 */
export const apiLoadPosters = () =>
  request
    .get('/app/reducers/modules/data/posters.js')
    .promise()
    .then(() => dataPosters);
