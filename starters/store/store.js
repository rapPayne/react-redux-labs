import { createStore, applyMiddleware }  from 'redux';
import mainReducer from './reducers/main-reducer';
import cartReducer from './reducers/cart-reducer';
import currentShowingReducer from './reducers/current-showing-reducer';
import currentTheaterReducer from './reducers/current-theater-reducer';
import filmsReducer from './reducers/films-reducer';
import showingsReducer from './reducers/showings-reducer';
import reservationsReducer from './reducers/reservations-reducer';
import { checkoutMiddleware, fetchFilmsMiddleware, getShowingsTimesForFilmMiddleware, fetchSeatsForTableMiddleware, fetchShowingMiddleware } from './middleware';

const initialState = {
  cart: {seats:[]},
  showingDate: new Date(), 
  currentFilm: {},
  currentFilmShowings: [],
  currentShowing: {},
  currentTheater: {tables: [{id:0, seats: []}]},
  films: [],
};

const combinedReducers = (state, action) => {
  return Object.assign({}, // Note: object spread operator will work here also
    mainReducer(state, action), 
    { cart: cartReducer(state.cart, action) },
    { currentShowing: currentShowingReducer(state.currentShowing, action) },
    { films: filmsReducer(state.films, action)},
    { showings: showingsReducer(state.showings, action)},
    { reservations: reservationsReducer(state.reservations, action)},
    { currentTheater: currentTheaterReducer(state.currentTheater, action)}
  );
}
// const combinedReducers = (state, action) => {
//   const newState = Object.assign({}, state);
//   return newState;
// }
//const combinedReducers = combineReducers({films:filmsReducer, showings:showingsReducer, reservations:reservationsReducer});

const middleware = applyMiddleware(checkoutMiddleware, fetchFilmsMiddleware, getShowingsTimesForFilmMiddleware, fetchSeatsForTableMiddleware, fetchShowingMiddleware)

export const store = createStore(combinedReducers, initialState, middleware);
