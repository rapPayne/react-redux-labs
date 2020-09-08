import { createStore, applyMiddleware }  from 'redux';
import { reducer } from './reducers';
import { middleware } from './middleware';

const initialState = {
  cart: {seats:[], food:[]},
  currentDate: new Date().setHours(0,0,0,0), 
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
};

const storeEnhancer = applyMiddleware(...middleware);

export const store = createStore(reducer, initialState, storeEnhancer);