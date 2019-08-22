import { actionTypes } from '../actions';

const cartReducer = (state = [], action) => {
  if (!action) return state;
  switch (action.type) {
    case actionTypes.ADD_SEAT_TO_CART:
      const currentSeats = state.seats;
      let newState;
      if (state.seats.find(s => s._id === action.seat._id))  // If it is there, remove it.
        newState = { ...state, seats: currentSeats.filter(s => s._id !== action.seat._id) }
      else  // Otherwise add it
        newState = { ...state, seats: [...currentSeats, action.seat] }
        console.log("cartReducer", newState);
      return newState;
    default:
      return state;
  }
};

export default cartReducer;