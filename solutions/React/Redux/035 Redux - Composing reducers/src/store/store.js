import { createStore } from 'redux';
import { reducer } from './reducers';

const initialState = {
  cart: {seats:[], food:[]},
  currentDate: new Date().setHours(0,0,0,0), 
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
};

export const store = createStore(reducer, initialState);