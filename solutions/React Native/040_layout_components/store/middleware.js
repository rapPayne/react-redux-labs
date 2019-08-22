import { host as server } from '../helpers';

const fetchFilmsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === "FETCH_FILMS") {
    fetch(`${server}/api/films`)
      .then(res => res.json())
      .then(films => films.forEach(film => dispatch({ type: "ADD_FILM", film })))
      .catch(err => console.error("Couldn't fetch films", err))
  }
  next(action);
}

const fetchShowingsForDateMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === "SET_SELECTED_DATE" || action.type === "SET_SELECTED_FILM") {
    const selected_date = getState().selected_date.toISOString().split('T')[0]
    const film_id = getState().selected_film.id;
    fetch(`${server}/api/showings/${film_id}/${selected_date}`)
      .then(res => res.json())
      .then(showings => dispatch({ type: "SET_SHOWINGS", showings }))
      .catch(err => console.error("Couldn't fetch showings", err))
  }
}

const fetchTablesAndSeatsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === "FETCH_TABLES_AND_SEATS") {
    fetch(`${server}/api/theaters/${action.theater_id}/tables/`)
      .then(res => res.json())
      .then(tables => dispatch({ type: "SET_TABLES", tables }))
      .catch(err => console.error("Couldn't fetch tables", err))
  }
  next(action);
}

const fetchReservationsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === "FETCH_RESERVATIONS") {
    console.log(action);
    fetch(`${server}/api/showings/${action.showing_id}/reservations/`)
      .then(res => res.json())
      .then(reservations => dispatch({ type: "SET_RESERVATIONS", reservations }))
      .catch(err => console.error("Couldn't fetch reservations", err))
  }
  next(action);
}

export default [fetchFilmsMiddleware, fetchShowingsForDateMiddleware, fetchTablesAndSeatsMiddleware, fetchReservationsMiddleware];
