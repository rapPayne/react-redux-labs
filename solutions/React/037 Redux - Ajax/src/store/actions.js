
export const actionTypes = {
  ADD_SEAT_TO_CART: "ADD_SEAT_TO_CART",
  FETCH_FILMS: "FETCH_FILMS",
  FETCH_INITIAL_DATA: "FETCH_INITIAL_DATA",
  FETCH_SHOWINGS: "FETCH_SHOWINGS",
  FETCH_THEATERS: "FETCH_THEATERS",
  REMOVE_SEAT_FROM_CART: "REMOVE_SEAT_FROM_CART",
  SET_CURRENT_DATE: "SET_CURRENT_DATE",
  SET_CURRENT_FILM: "SET_CURRENT_FILM",
  SET_CURRENT_SHOWING: "SET_CURRENT_SHOWING",
  SET_FILMS: "SET_FILMS",
  SET_SHOWINGS: "SET_SHOWINGS",
  SET_TABLES: "SET_TABLES",
  SET_THEATERS: "SET_THEATERS",
  SET_SEATS: "SET_SEATS",
  SET_USER: "SET_USER",
};

const addSeatToCart = seat => ({type: actionTypes.ADD_SEAT_TO_CART, seat});
const fetchFilms = () => ({type: actionTypes.FETCH_FILMS});
const fetchInitialData = () => ({type: actionTypes.FETCH_INITIAL_DATA});
const fetchShowings = () => ({type: actionTypes.FETCH_SHOWINGS});
const fetchTheaters = () => ({type: actionTypes.FETCH_THEATERS});
const removeSeatFromCart = seat => ({type: actionTypes.REMOVE_SEAT_FROM_CART, seat});
const setCurrentDate = date => ({type: actionTypes.SET_CURRENT_DATE, date});
const setCurrentFilm = film => ({type: actionTypes.SET_CURRENT_FILM, film});
const setCurrentShowing = showing => ({type: actionTypes.SET_CURRENT_SHOWING, showing});
const setFilms = films => ({type: actionTypes.SET_FILMS, films});
const setShowings = showings => ({type: actionTypes.SET_SHOWINGS, showings});
const setTables = tables => ({type: actionTypes.SET_TABLES, tables});
const setTheaters = theaters => ({type: actionTypes.SET_THEATERS, theaters});
const setSeats = seats => ({type: actionTypes.SET_SEATS, seats});
const setUser = user => ({type: actionTypes.SET_USER, user});

export const actions = {
  addSeatToCart,
  fetchFilms,
  fetchInitialData,
  fetchShowings,
  fetchTheaters,
  removeSeatFromCart,
  setCurrentDate,
  setCurrentFilm,
  setCurrentShowing,
  setFilms,
  setShowings,
  setTables,
  setTheaters,
  setSeats,
  setUser,
};