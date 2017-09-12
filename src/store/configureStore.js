import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

let configureStore = (history) => {
  let middlewares = [thunkMiddleware, routerMiddleware(history)];
  let store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store
};

export default configureStore;
