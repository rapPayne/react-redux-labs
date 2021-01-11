import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers.js';
import middlewares from './middleware.js';

const initialState = {
  films: [],
  selected_date: new Date(),
  selected_film: {},
  showFilmDetails: false,
  tables: [],
}

export const store = createStore(reducer, initialState,   
                                 applyMiddleware(...middlewares));
