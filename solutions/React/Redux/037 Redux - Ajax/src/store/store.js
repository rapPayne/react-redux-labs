import { createStore, applyMiddleware } from 'redux';
import { middleware } from './middleware/middleware';
import { reducer } from './reducers/reducer';
export { actions } from './actions';
window.debugging = true;
const initialState = {
  cart: { seats: [], food: [] },
  currentDate: new Date().setHours(0, 0, 0, 0),
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
};
const storeEnhancer = applyMiddleware(...middleware);
export const store = createStore(reducer, initialState, storeEnhancer);