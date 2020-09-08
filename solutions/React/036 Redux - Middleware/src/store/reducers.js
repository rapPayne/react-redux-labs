import { actionTypes } from './actions';

const rootReducer = (state, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_DATE:
      return { ...state, currentDate: action.date }
    case actionTypes.SET_CURRENT_FILM:
      return { ...state, currentFilm: action.film }
    case actionTypes.SET_CURRENT_SHOWING:
      return { ...state, currentShowing: action.showing }
    case actionTypes.SET_FILMS:
      return { ...state, films: action.films }
    case actionTypes.SET_SHOWINGS:
      return { ...state, showings: action.showings }
    case actionTypes.SET_TABLES:
      return { ...state, tables: action.tables }
    case actionTypes.SET_THEATERS:
      return { ...state, theaters: action.theaters }
    case actionTypes.SET_SEATS:
      return { ...state, seats: action.seats }
    case actionTypes.SET_USER:
      return { ...state, user: action.user }
    default:
      return state;
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_SEAT_TO_CART:
      return { ...state, seats: [...state.seats, action.seat] }
    case actionTypes.REMOVE_SEAT_FROM_CART:
      return { ...state, seats: state.seats.filter(seat => seat !== action.seat) }
    default:
      return state;
  }
}
export const reducer = (state, action = {}) => (
  {
    ...rootReducer(state, action),
    cart: cartReducer(state.cart, action),
  }
);