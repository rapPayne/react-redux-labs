export const actionTypes = {
  CHECKOUT: "CHECKOUT",
  FETCH_FILMS: "FETCH_FILMS",
  FETCH_SHOWING: "FETCH_SHOWING",
  FETCH_TABLES_FOR_THEATER: "FETCH_TABLES_FOR_THEATER",
  FETCH_SEATS_FOR_TABLE: "FETCH_SEATS_FOR_TABLE",
  MAKE_RESERVATION: "MAKE_RESERVATION",
  REMOVE_RESERVATION: "REMOVE_RESERVATION",
  SET_CURRENT_FILM: "SET_CURRENT_FILM",
  SET_CURRENT_FILM_SHOWINGS: "SET_CURRENT_FILM_SHOWINGS",
  SET_CURRENT_SHOWING: "SET_CURRENT_SHOWING",
  SET_CURRENT_THEATER: "SET_CURRENT_THEATER",
  SET_FILMS: "SET_FILMS",
  SET_RESERVATIONS_FOR_CURRENT_SHOWING: "SET_RESERVATIONS_FOR_CURRENT_SHOWING",
  SET_SEATS_FOR_TABLE: "SET_SEATS_FOR_TABLE",
  SET_TABLES_FOR_CURRENT_THEATER: "SET_TABLES_FOR_CURRENT_THEATER",
  SET_SHOWING_DATE: "SET_SHOWING_DATE",
  ADD_SEAT_TO_CART: "ADD_SEAT_TO_CART",
}

export const actions = {
  checkout,
  fetchFilms,
  fetchSeatsForTable,
  fetchShowing,
  fetchTablesForTheater,
  setCurrentFilm,
  setCurrentFilmShowings,
  setCurrentShowing,
  setCurrentTheater,
  setFilms,
  //setReservationsForCurrentShowing,
  //setSeatsForTable,
  setTablesForCurrentTheater,
  setShowingDate,
  addSeatToCart,
};

function checkout(cart) {
  return {type: actionTypes.CHECKOUT, cart};
}
function fetchFilms() {
  return {type: actionTypes.FETCH_FILMS};
}
function fetchSeatsForTable(table) {
  return {type: actionTypes.FETCH_SEATS_FOR_TABLE, table};
}
function fetchShowing(showingId) {
  return {type: actionTypes.FETCH_SHOWING, showingId};
}
function fetchTablesForTheater(theaterId) {
  return {type: actionTypes.FETCH_TABLES_FOR_THEATER, theaterId};
}
function setCurrentFilm(film) {
  return {type: actionTypes.SET_CURRENT_FILM, film};
}
function setCurrentFilmShowings(currentFilmShowings) {
  return {type: actionTypes.SET_CURRENT_FILM_SHOWINGS, currentFilmShowings};
}
function setCurrentShowing(showing) {
  return {type: actionTypes.SET_CURRENT_SHOWING, showing};
}
function setCurrentTheater(theater) {
  return {type: actionTypes.SET_CURRENT_THEATER, theater};
}
function setFilms(films) {
  console.log("actions set films")
  return {type: actionTypes.SET_FILMS, films};
}
// function setReservationsForCurrentShowing(reservations) {
//   return {type: actionTypes.SET_RESERVATIONS_FOR_CURRENT_SHOWING, reservations};
// }
// function setSeatsForTable(table, seats) {
//   return {type: actionTypes.SET_SEATS_FOR_TABLE, table, seats};
// }
function setTablesForCurrentTheater(tables) {
  return {type: actionTypes.SET_TABLES_FOR_CURRENT_THEATER, tables};
}
function setShowingDate(date) {
  return {type: actionTypes.SET_SHOWING_DATE, date};
}
function addSeatToCart(seat, table, theater, showing) {
  return {type: actionTypes.ADD_SEAT_TO_CART, seat}
}
