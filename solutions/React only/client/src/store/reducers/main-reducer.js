import { actionTypes } from '../actions';

const mainReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_DATE:
      return { ...state, currentDate: action.currentDate }
    case actionTypes.SET_CURRENT_FILM:
      return { ...state, currentFilm: action.film }
    case actionTypes.SET_CURRENT_SHOWING:
      return { ...state, currentShowing: action.currentShowing }
    case actionTypes.SET_SHOWINGS:
      return { ...state, showings: action.showings }
    case actionTypes.SET_TABLES:
      return { ...state, tables: [...action.tables] };
    case actionTypes.SET_THEATERS:
      return { ...state, theaters: [...action.theaters] };
    case actionTypes.SET_SEATS:
      return { ...state, seats: [...action.seats] };
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default mainReducer;