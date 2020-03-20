import { actionTypes } from '../actions';

// See the note in the server's README about reservations and holds.
const reservationsReducer = (state = {}, action) => {
  if (!action) return state;
  // const { seat, showing } = action;
  switch (action.type) {
    // Setting all the reservations. This is dispatched from middleware
    // in the callback from fetching them all from the API server
    case actionTypes.SET_RESERVATIONS_FOR_CURRENT_SHOWING:
      return [...action.reservations];
    // Placing a local, temporary hold on the seat so the user knows
    // which seat they're contemplating buying. It will appear as 
    // "held" in PickSeats and in their shopping cart.
    // case actionTypes.HOLD_SEAT:
    //   return [...state, { seat_id: seat.id, showing_id: showing.id }];
    // // Undoing the hold from above. Also only local.
    // case actionTypes.CLEAR_HOLD_ON_SEAT:
    //   const newState = state.filter(r => !(r.seat_id === seat.id && r.showing_id === showing.id));
    //   console.log("oldstate", state.length, "newState", newState.length, seat, showing, state);
    //   return newState;
    default:
      return state;
  }
};

export default reservationsReducer;