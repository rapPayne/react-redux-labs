import { actionTypes } from './action-types';

export const reducer = (state, action) => {
  console.log(action);
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_CELL:
      return { ...state, user: { ...state.user, cell: action.cell } };
    case actionTypes.SET_EMAIL:
      return { ...state, user: { ...state.user, email: action.email } };
    case actionTypes.SET_NAME_FIRST:
      return { ...state, user: { ...state.user, name: { ...state.user.name, first: action.first } } };
    case actionTypes.SET_NAME_LAST:
      return { ...state, user: { ...state.user, name: { ...state.user.name, last: action.last } } };
    case actionTypes.SET_LOCATION_STREET:
      return { ...state, user: { ...state.user, location: { ...state.user.location, street: action.street } } };
    default:
      return state;
  }
};