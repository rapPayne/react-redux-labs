import { actionTypes } from '../actions';

const reservationsReducer = (state = {}, action) => {
  if (!action) return state;
  const { userId, seatId, showingId } = action;
  switch (action.type) {
    case actionTypes.SET_RESERVATIONS_FOR_CURRENT_SHOWING:
      return [...action.reservations];
    case actionTypes.MAKE_RESERVATION:
      return [...state, { userId, seatId, showingId }];
    case actionTypes.REMOVE_RESERVATION:
      return state.filter(r => r.seatId !== seatId && r.showingId !== showingId);
    default:
      return state;
  }
};

export default reservationsReducer;