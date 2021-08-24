import { actionTypes } from '../actions';

const cartReducer = (state = [], action) => {
  if (!action) return state;
  const { seat, showing } = action;
  switch (action.type) {
    case actionTypes.ADD_SEAT_TO_CART:
      return { ...state, seats: [...state.seats, { seat_id: seat.id, seat_number: seat.seat_number, showing_id: showing.id, price: seat.price }] }
    case actionTypes.REMOVE_SEAT_FROM_CART:
      let newSeats = state.seats.filter(cartSeat => ! (cartSeat.seat_id === seat.id && cartSeat.showing_id === action.showing.id))
      let newState = {...state, seats: [...newSeats]}
        console.log("cartReducer", newSeats, newState);
      return newState;
    default:
      return state;
  }
};

export default cartReducer;