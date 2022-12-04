//import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import { reducer } from './reducers';
import { reducer } from './slices';
import { middleware } from './middleware';

const preloadedState = {
  cart: { seats: [], food: [] },
  currentDate: new Date().setHours(0, 0, 0, 0),
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
  user: {},
};

//const enhancers = applyMiddleware(...middleware);
//export const store = createStore(reducer, preloadedState, enhancers,)
export const store = configureStore({ reducer, preloadedState, middleware });