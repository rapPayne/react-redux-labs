import { actionTypes } from '../actions';

const mainReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SHOWING_DATE:
      return { ...state, showingDate: action.date }
    case actionTypes.SET_CURRENT_FILM:
      return { ...state, currentFilm: action.film }
    case actionTypes.SET_CURRENT_FILM_SHOWINGS:
      return { ...state, currentFilmShowings: action.currentFilmShowings }
    case actionTypes.SET_CURRENT_SHOWING:
      return { ...state, currentShowing: action.showing }
    default:
      return state;
  }
};

export default mainReducer;