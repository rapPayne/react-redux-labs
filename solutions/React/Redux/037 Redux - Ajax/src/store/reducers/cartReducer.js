import { actionTypes } from '../actions';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_SEAT_TO_CART:
      return { ...state, seats: [...state.seats, action.seat] }
    case actionTypes.REMOVE_SEAT_FROM_CART:
      return { ...state, seats: state.seats.filter(seat => seat !== action.seat) }
    default:
      return state;
  }
};