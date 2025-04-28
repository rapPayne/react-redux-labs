
export const reducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case "ADD_PEOPLE":
      return {...state, people: [...state.people, ...action.people]}
    case "ADD_PERSON":
      return {...state, people: [...state.people, action.person]}
    default:
      return state;
  }
}
