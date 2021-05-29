export const reducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case "SET_FILMS":
      return { ...state, films: action.films }
    case "SET_CURRENT_DATE":
      return { ...state, date: action.date }
    case "SET_CURRENT_FILM":
      return { ...state, film: action.film }
    case "SET_CURRENT_SHOWING":
      return { ...state, showing: action.showing }
    case "SET_TABLES":
      return { ...state, tables: action.tables }
    case "SET_THEATERS":
      return { ...state, theaters: action.theaters }
    case "SET_SEATS":
      return { ...state, seats: action.seats }
    case "SET_SHOWINGS":
      return { ...state, showings: action.showings }
    case "SET_USER":
      return { ...state, user: action.user }
    default:
      return state;
  }
}