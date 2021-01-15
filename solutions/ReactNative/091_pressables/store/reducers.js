export const reducer = (state, action = {}) => {
  switch (action.type) {
    case "ADD_FILM":
      return { ...state, films: [...state.films.filter(f => f.id !== action.film?.id), action.film] };
    case "HIDE_FILM_DETAILS":
      return { ...state, show_film_details: false };
    case "SELECT_SEAT":
      const { seat } = action;
      seat.status = undefined;
      return { ...state, cart: [...state.cart, { showing_id: action.showing.id, ...action.seat }] }
    case "SET_SELECTED_DATE":
      return { ...state, selected_date: action.date };
    case "SET_SELECTED_FILM":
      return { ...state, selected_film: action.film };
    case "SET_SELECTED_SHOWING":
      return { ...state, selected_showing: action.showing };
    case "SET_SHOWINGS":
      return { ...state, showings: action.showings };
    case "SET_TABLES":
      return { ...state, tables: action.tables };
    case "SET_RESERVATIONS":
      return { ...state, reservations: action.reservations };
    case "SHOW_FILM_DETAILS":
      return { ...state, show_film_details: true };
    case "UNSELECT_SEAT":
      return { ...state, cart: [...state.cart.filter(item => !(item.id === action.seat.id && item.showing_id === action.showing.id))] }
    default:
      return state;
  }
}; 