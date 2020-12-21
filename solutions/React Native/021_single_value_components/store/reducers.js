export const reducer = (state, action={}) => {
  switch (action.type) {
    case "ADD_FILM":
      return {...state, films:[...state.films, action.film]};
    default:
      return state;
  }
}
