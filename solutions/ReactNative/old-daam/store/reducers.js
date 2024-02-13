export const reducer = (state, action = {}) => {
  console.log("*".repeat(80) + "REDUCER RUNNING")
  console.log({action})
  console.log("*".repeat(80));

  switch (action.type) {
    case "ADD_FILM":
      return { ...state, films: [...state.films, action.film] };
    case "SET_SELECTED_DATE":
      console.log(action.type, {action})
      return { ...state, selected_date: action.date };
    default:
      return state;
  }
}
