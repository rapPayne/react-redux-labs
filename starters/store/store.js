import { createStore, applyMiddleware }  from 'redux';
import mainReducer from './reducers/main-reducer';
import cartReducer from './reducers/cart-reducer';
import filmsReducer from './reducers/films-reducer';
import reservationsReducer from './reducers/reservations-reducer';
import middlewares from './middleware';

const initialState = {
  cart: {seats:[], food:[]},
  currentDate: new Date().setHours(0,0,0,0), 
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
};

const combinedReducers = (state, action) => {
  return Object.assign({}, // Note: object spread operator will work here also
    mainReducer(state, action), 
    { cart: cartReducer(state.cart, action) },
    { films: filmsReducer(state.films, action)},
    { reservations: reservationsReducer(state.reservations, action)},
  );
}
// const combinedReducers = (state, action) => {
//   const newState = Object.assign({}, state);
//   return newState;
// }
//const combinedReducers = combineReducers({films:filmsReducer, showings:showingsReducer, reservations:reservationsReducer});

const middleware = applyMiddleware(...middlewares);

export const store = createStore(combinedReducers, initialState, middleware);