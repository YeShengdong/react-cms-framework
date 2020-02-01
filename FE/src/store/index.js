import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

// const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  // const initialState = window && window.PRELOADED_STATE || {}
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(sagas);
  // const persistor = persistStore(store)
  // return { store, persistor }
  return { store };
};
