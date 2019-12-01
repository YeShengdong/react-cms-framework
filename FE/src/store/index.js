import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (initialState) => {
  // const initialState = window && window.PRELOADED_STATE || {}
  const store = createStore(
    rootReducer,
    initialState,
  );
  // const persistor = persistStore(store)
  // return { store, persistor }
  return { store };
};
