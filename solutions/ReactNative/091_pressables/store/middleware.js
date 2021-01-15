import { host } from './api_host_maker';

const fetchFilmsMiddleware = ({ dispatch, getState }) => next => async action => {
  if (action.type === "FETCH_FILMS") {
    try {
      const films = await fetch(`${host}/api/films`)
        .then(res => res.json())
      films.forEach(film => dispatch({ type: "ADD_FILM", film }))
    } catch (e) {
      console.error('Could not fetch films', e)
    }
  }
  next(action);
}

const fetchReservationsMiddleware = ({ dispatch }) => next => action => {
  if (action.type === "FETCH_RESERVATIONS") {
    const id = action.showing_id;
    fetch(`${host}/api/showings/${id}/reservations/`)
      .then(res => res.json())
      .then(reservations => dispatch({ type: "SET_RESERVATIONS", reservations }))
      .catch(err => console.error("Couldn't fetch reservations", err))
  }
  next(action);
}

const fetchShowingsForDateMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === "SET_SELECTED_DATE" || action.type === "SET_SELECTED_FILM") {
    const selected_date = getState().selected_date.toISOString().split('T')[0]
    const film_id = getState().selected_film.id;
    fetch(`${host}/api/showings/${film_id}/${selected_date}`)
      .then(res => res.json())
      .then(showings => dispatch({ type: "SET_SHOWINGS", showings }))
      .catch(err => console.error("Couldn't fetch showings", err))
  }
}

const fetchTablesAndSeatsMiddleware = ({ dispatch }) => next => async action => {
  if (action.type === 'FETCH_TABLES_AND_SEATS') {
    const { theater_id } = action
    fetch(`${host}/api/theaters/${theater_id}/tables`)
      .then(res => res.json())
      .then(tables => dispatch({ type: 'SET_TABLES', tables }))
      .catch(err => console.error("Couldn't fetch tables", err))
  }
  return next(action)
}

const loggingMiddleware = ({ getState }) => next => action => {
  if (getState().logging_enabled) {
    console.log({ action, state: getState() });
  }
  next(action);

}
export default [
  fetchFilmsMiddleware,
  fetchReservationsMiddleware,
  fetchShowingsForDateMiddleware,
  fetchTablesAndSeatsMiddleware,
  loggingMiddleware
];