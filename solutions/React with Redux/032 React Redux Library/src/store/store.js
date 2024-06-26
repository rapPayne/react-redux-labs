import { createStore } from 'redux';

const initialState = {
  cart: { seats: [], food: [] },
  currentDate: new Date().setHours(0, 0, 0, 0),
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
  user: {},
};

const reducer = (state, action) => ({ ...state });  // <-- "Spread" the old state.

export const store = createStore(reducer, initialState)