import { actionTypes } from './actions';
import { createSlice } from '@reduxjs/toolkit';
// cart: [],
// currentDate: new Date().setHours(0, 0, 0, 0),
// films: [],
// reservations: [],
// showings: [],
// theaters: [],
// user: {},
const rootReducer = (state, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_DATE:
      return { ...state, currentDate: action.date }
    case actionTypes.SET_CURRENT_FILM:
      return { ...state, currentFilm: action.film }
    case actionTypes.SET_CURRENT_SHOWING:
      return { ...state, currentShowing: action.showing }
    case actionTypes.SET_SHOWINGS:
      return { ...state, showings: action.showings }
    case actionTypes.SET_TABLES:
      return { ...state, tables: [...action.tables] };
    case actionTypes.SET_THEATERS:
      return { ...state, theaters: [...action.theaters] };
    case actionTypes.SET_SEATS:
      return { ...state, seats: [...action.seats] };
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    case actionTypes.SET_FILMS:
      return { ...state, films: action.films }
    default:
      return state;
  }
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addSeatToCart: (s, a) => s.push(a.seat),
    removeSeatFromCart: (s, a) => s.filter(seat => seat.id !== a.seat.id)
  }
})
const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: [],
  reducers: {
    'setReservationsForCurrentShowing': (s, a) => a.payload,
  }
});

export const reducer = (s, a) => ({
  ...rootReducer(s, a),
  cart: cartSlice.reducer(s.cart, a),
  reservations: reservationsSlice.reducer(s.reservations, a),
})

export const sliceActions = {
  cart: cartSlice.actions,
  reservations: reservationsSlice.actions,
}