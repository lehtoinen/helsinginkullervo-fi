import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = createStore(
  persistReducer(persistConfig, reducer),
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
