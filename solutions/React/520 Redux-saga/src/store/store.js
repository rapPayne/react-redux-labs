import { createStore, applyMiddleware }  from 'redux';
import { reducer } from './reducers';
import { middleware } from './middleware';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas';

const initialState = {
  cart: {seats:[], food:[]},
  currentDate: new Date().setHours(0,0,0,0), 
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
};

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(...middleware, sagaMiddleware);
export const store = createStore(reducer, initialState, storeEnhancer);
sagaMiddleware.run(rootSaga);