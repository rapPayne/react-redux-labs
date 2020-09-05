import { actionTypes } from '../actions';

const filmsReducer = (state = [], action) => {
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_FILMS:
      return action.films;
    default:
      return state;
  }
};

export default filmsReducer;