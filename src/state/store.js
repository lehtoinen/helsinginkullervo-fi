import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

function loadDevTools() {
  /* eslint-disable */
  return process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    window.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
  /* eslint-enable */
}

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), loadDevTools())
);

export default store;
