export const reducer = (state, action = {}) => {
  console.log("In reducer", state, action);
  switch (action.type) {
    case "SET_CURRENT_DATE":
      return { ...state, currentDate: action.currentDate }
    case "SET_CURRENT_FILM":
      return { ...state, currentFilm: action.currentFilm }
    case "SET_CURRENT_SHOWING":
      return { ...state, currentShowing: action.currentShowing }
    case "SET_FILMS":
      return { ...state, films: action.films }
    case "SET_SHOWINGS":
      return { ...state, showings: action.showings }
    case "SET_TABLES":
      return { ...state, tables: action.tables }
    case "SET_THEATERS":
      return { ...state, theaters: action.theaters }
    case "SET_SEATS":
      return { ...state, seats: action.seats }
    case "SET_USER":
      return { ...state, user: action.user }
    default:
      return state;
  }
};
