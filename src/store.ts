import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from 'jagrastate/reducer';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'AuthState',
  ],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(
    ReduxPromise,
    ReduxThunk,
  ),
);

let persistor = persistStore(store);

export {
    store,
    persistor,
};
