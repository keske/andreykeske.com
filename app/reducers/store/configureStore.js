import { createStore, applyMiddleware } from 'redux';
import async from '../utils/asyncMiddleware';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../';

const logger = createLogger({
  collapsed: true,
  predicate: () =>
    process.env.NODE_ENV === 'development',
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  async,
  logger
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../', () => {
      const nextRootReducer = require('../').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
