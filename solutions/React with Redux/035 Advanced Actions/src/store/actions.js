export const actionTypes = {
  SET_CURRENT_DATE: "SET_CURRENT_DATE",
  SET_CURRENT_FILM: "SET_CURRENT_FILM",
  SET_CURRENT_SHOWING: "SET_CURRENT_SHOWING",
  SET_FILMS: "SET_FILMS",
  SET_SEATS: "SET_SEATS",
  SET_SHOWINGS: "SET_SHOWINGS",
  SET_TABLES: "SET_TABLES",
  SET_THEATERS: "SET_THEATERS",
  SET_USER: "SET_USER",
};

const setCurrentDate = date => ({ type: actionTypes.SET_CURRENT_DATE, date });
const setCurrentFilm = film => ({ type: actionTypes.SET_CURRENT_FILM, film });
const setCurrentShowing = showing => ({ type: actionTypes.SET_CURRENT_SHOWING, showing });
const setFilms = films => ({ type: actionTypes.SET_FILMS, films });
const setSeats = seats => ({ type: actionTypes.SET_SEATS, seats });
const setShowings = showings => ({ type: actionTypes.SET_SHOWINGS, showings });
const setTables = tables => ({ type: actionTypes.SET_TABLES, tables });
const setTheaters = theaters => ({ type: actionTypes.SET_THEATERS, theaters });
const setUser = user => ({ type: actionTypes.SET_USER, user });
export const actions = {
  setCurrentDate,
  setCurrentFilm,
  setCurrentShowing,
  setFilms,
  setSeats,
  setShowings,
  setTables,
  setTheaters,
  setUser,
};
