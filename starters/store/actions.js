
export const actionTypes = {
  ADD_SEAT_TO_CART: "ADD_SEAT_TO_CART",
  CHECKOUT: "CHECKOUT",
  FETCH_FILMS: "FETCH_FILMS",
  FETCH_INITIAL_DATA: "FETCH_INITIAL_DATA",
  FETCH_RESERVATIONS_FOR_SHOWING: "FETCH_RESERVATIONS_FOR_SHOWING",
  FETCH_SHOWING: "FETCH_SHOWING",
  FETCH_SHOWINGS: "FETCH_SHOWINGS",
  FETCH_THEATERS: "FETCH_THEATERS",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  REMOVE_SEAT_FROM_CART: "REMOVE_SEAT_FROM_CART",
  SET_CURRENT_DATE: "SET_CURRENT_DATE",
  SET_CURRENT_FILM: "SET_CURRENT_FILM",
  SET_CURRENT_SHOWING: "SET_CURRENT_SHOWING",
  SET_SHOWINGS: "SET_SHOWINGS",
  SET_FILMS: "SET_FILMS",
  SET_RESERVATIONS_FOR_CURRENT_SHOWING: "SET_RESERVATIONS_FOR_CURRENT_SHOWING",
  SET_THEATERS: "SET_THEATERS",
  SET_USER: "SET_USER",
}

const addSeatToCart = (seat, showing) => ({ type: actionTypes.ADD_SEAT_TO_CART, seat, showing });
const checkout = (cart) => ({ type: actionTypes.CHECKOUT, cart });
const fetchFilms = () => ({ type: actionTypes.FETCH_FILMS });
const fetchInitialData = () => ({ type: actionTypes.FETCH_INITIAL_DATA });
const fetchReservationsForShowing = (showingId) => ({ type: actionTypes.FETCH_RESERVATIONS_FOR_SHOWING, showingId });
const fetchShowing = (showingId) => ({ type: actionTypes.FETCH_SHOWING, showingId });
const fetchShowings = () => ({ type: actionTypes.FETCH_SHOWINGS });
const fetchTheaters = () => ({ type: actionTypes.FETCH_THEATERS });
const login = (email, password) => ({ type: actionTypes.LOGIN, email, password });
const logout = () => ({ type: actionTypes.LOGOUT });
const register = (user) => ({ type: actionTypes.REGISTER, user });
const removeSeatFromCart = (seat, showing) => ({ type: actionTypes.REMOVE_SEAT_FROM_CART, seat, showing });
const setCurrentDate = date => ({ type: actionTypes.SET_CURRENT_DATE, date });
const setCurrentFilm = film => ({ type: actionTypes.SET_CURRENT_FILM, film });
const setCurrentShowing = showing => ({ type: actionTypes.SET_CURRENT_SHOWING, showing });
const setCurrentTheater = theater => ({ type: actionTypes.SET_CURRENT_THEATER, theater });
const setFilms = films => ({ type: actionTypes.SET_FILMS, films });
const setShowings = showings => ({ type: actionTypes.SET_SHOWINGS, showings });
const setReservationsForCurrentShowing = (reservations) => ({ type: actionTypes.SET_RESERVATIONS_FOR_CURRENT_SHOWING, reservations });
const setTheaters = (theaters) => ({ type: actionTypes.SET_THEATERS, theaters });
const setUser = user => ({ type: actionTypes.SET_USER, user });

export const actions = {
  checkout,
  removeSeatFromCart,
  fetchFilms,
  fetchInitialData,
  fetchReservationsForShowing,
  fetchShowing,
  fetchShowings,
  fetchTheaters,
  login,
  logout,
  register,
  setCurrentDate,
  setCurrentFilm,
  setCurrentShowing,
  setCurrentTheater,
  setFilms,
  setReservationsForCurrentShowing,
  setShowings,
  setTheaters,
  setUser,
  addSeatToCart,
};
