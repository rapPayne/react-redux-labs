export const reducer = (state, action) => {
  console.log(action);
  if (!action) return state;
  switch (action.type) {
    case "SET_CELL":
      return { ...state, user: { ...state.user, cell: action.cell } };
    case "SET_EMAIL":
      return { ...state, user: { ...state.user, email: action.email } };
    case "SET_NAME_FIRST":
      return { ...state, user: { ...state.user, name: { ...state.user.name, first: action.first } } };
    case "SET_LOCATION_STREET":
      return { ...state, user: { ...state.user, location: { ...state.user.location, street: action.street } } };
    default:
      return state;
  }
};