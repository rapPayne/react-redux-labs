export const reducer = (state, action = {}) => {
  switch (action.type) {
    case "ADD_FILM":
      return { ...state, films: [...state.films.filter(f => f.id !== action.film?.id), action.film] };
    case "HIDE_FILM_DETAILS":
      return { ...state, show_film_details: false };
    case "SET_SELECTED_DATE":
      return { ...state, selected_date: action.date };
    case "SET_SELECTED_FILM":
      return { ...state, selected_film: action.film };
    case "SHOW_FILM_DETAILS":
      return { ...state, show_film_details: true };
    default:
      return state;
  }
}; 