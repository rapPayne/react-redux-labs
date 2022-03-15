import { createStore } from 'redux';
import { reducer } from './reducers';
export { actions } from './actions';

const initialState = {
  cart: { seats: [], food: [] },
  currentDate: new Date().setHours(0, 0, 0, 0),
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
  user: {},
};

export const store = createStore(reducer, initialState)