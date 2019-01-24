export const reducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case "ADD_FILM":
      return { ...state, films: [...state.films, action.film] };
    case "HIDE_FILM_DETAILS":
      return { ...state, showFilmDetails: false };
    case "SET_SELECTED_DATE":
      return { ...state, selected_date: action.date };
    case "SET_SELECTED_FILM":
      return { ...state, selected_film: action.film };
    case "SHOW_FILM_DETAILS":
      return { ...state, showFilmDetails: true };
    default:
      return state;
  }
};