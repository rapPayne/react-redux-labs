import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers.js';
import middlewares from './middleware.js';
const initialState = {
  logging_enabled: false, 
  films: [],
  selected_date: new Date(),
  selected_film: {},
  show_film_details: false,
  showings: [],
  tables: [],
}

export const store = createStore(reducer, initialState,   
                                 applyMiddleware(...middlewares));
