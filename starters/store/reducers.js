import { actionTypes } from './actions';

const rootReducer = (state, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_DATE:
      return { ...state, currentDate: action.date }
    case actionTypes.SET_CURRENT_FILM:
      return { ...state, currentFilm: action.film }
    case actionTypes.SET_CURRENT_SHOWING:
      return { ...state, currentShowing: action.showing }
    case actionTypes.SET_CURRENT_THEATER:
      return { ...state, currentTheater: action.theater }
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
    //   return [...state, { seat_id: action.seat.id, showing_id: action.showing.id }];
    // // Undoing the hold from above. Also only local.
    // case actionTypes.CLEAR_HOLD_ON_SEAT:
    //   const newState = state.filter(r => !(r.seat_id === action.seat.id && r.showing_id === action.showing.id));
    //   console.log("oldstate", state.length, "newState", newState.length, seat, showing, state);
    //   return newState;
    default:
      return state;
  }
};

export const reducer = (state, action = {}) => (
  {
    ...rootReducer(state, action),
    cart: cartReducer(state.cart, action),
    reservations: reservationsReducer(state.reservations, action),
  }
);