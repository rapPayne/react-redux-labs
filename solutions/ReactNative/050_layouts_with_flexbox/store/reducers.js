export const reducer = (state, action) => {
 if (!action) return state;
 switch (action.type) {
  case "ADD_FILM":
   return { ...state, films: [...state.films, action.film] };
  case "HIDE_FILM_DETAILS":
   return { ...state, show_film_details: false };
  case "SHOW_FILM_DETAILS":
   return { ...state, show_film_details: true };
  case "SET_SHOWINGS":
   return { ...state, showings: action.showings };
  case "SET_SELECTED_DATE":
   return { ...state, selected_date: action.date };
  case "SET_SELECTED_FILM":
   return { ...state, selected_film: action.film };
  case "SET_SELECTED_SHOWING":
   return { ...state, selected_showing: action.showing };
  case "SET_TABLES":
   return { ...state, tables: action.tables };
  case "SET_RESERVATIONS":
   return { ...state, reservations: action.reservations };
  default:
   return state;
 }
};