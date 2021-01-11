export const reducer = (state, action={}) => {
  switch(action.type) {
    case "ADD_FILM":
      return {...state, films:[...state.films.filter(f=>f.id!==action.film?.id), action.film]};
    default: 
      return state; 
    }
}; 