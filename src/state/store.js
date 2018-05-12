import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

export const store = createStore(
  persistReducer(persistConfig, reducer),
  compose(applyMiddleware(thunk), loadDevTools())
);

export const persistor = persistStore(store);
