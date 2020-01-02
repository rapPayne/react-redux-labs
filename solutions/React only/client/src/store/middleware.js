import { actionTypes, actions } from './actions';

const fetchInitialDataMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_INITIAL_DATA) {
    dispatch(actions.fetchFilms());
    dispatch(actions.fetchShowings());
    dispatch(actions.fetchTheaters());
    // dispatch(actions.fetchTables());
    // dispatch(actions.fetchSeats());
  }
  next(action);
}
const fetchFilmsMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_FILMS) {
    const url = `/api/films`;
    fetch(url)
      .then(res => res.json())
      .then(films => dispatch(actions.setFilms(films)))
      .catch(err => console.error(`Error fetching films`, err));
  }
  next(action);
}

const fetchReservationsForShowing = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_RESERVATIONS_FOR_SHOWING) {
    const showingId = action.showingId;
    console.warn("in FRFS middleware", action);
    fetch(`/api/showings/${showingId}/reservations`)
      .then(res => res.json())
      .then(reservations => dispatch(actions.setReservationsForCurrentShowing(reservations)))
      .catch(err => console.error(`Error setting reservations for showing:`, err));
  }
  next(action);
}

const fetchShowingsMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_SHOWINGS) {
    fetch(`/api/showings/`)
      .then(res => res.json())
      .then(showings => showings.map(s => { return { ...s, showing_time: new Date(s.showing_time) } }))
      .then(showings => dispatch(actions.setShowings(showings)))
      .catch(err => console.error(`Error setting showings:`, err));
  }
  next(action);
}

const fetchTheatersMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_THEATERS) {
    fetch(`/api/theaters/`)
      .then(res => res.json())
      .then(theaters => dispatch(actions.setTheaters(theaters)))
      .catch(err => console.error(`Error setting theaters:`, err));
  }
  next(action);
}

// If we fetch the current showing, we should also fetch the current film,
// theater, tables, seats, and reservations
const fetchShowingMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_SHOWING) {
    const { showingId } = action;
    const url = `/api/showings/${showingId}/reservations`;
    const showingPromise = fetch(url)
      .then(res => res.json())
      .then(showing => {
        dispatch(actions.setCurrentShowing(showing));
        return showing;
      })
      .catch(err => console.error(`Error setting current showing:`, err));
    fetch(`/api/showings/${showingId}/reservations`)
      .then((res) => res.json())
      .then(reservations => {
        dispatch(actions.setReservationsForCurrentShowing(reservations));
        return reservations;
      })
      .catch(err => console.error(`Error setting reservations for the current showing:`, err));
    showingPromise.then((showing) => {
      const url = `/api/theaters/${showing.theater_id}`;
      return fetch(url)
        .then((res) => res.json())
        .then(theater => dispatch(actions.setCurrentTheater(theater)))
        .catch(err => console.error(`Error setting current theater:`, err));
    });
    showingPromise.then((showing) => {
      const url = `/api/theaters/${showing.theater_id}/tables`;
      return fetch(url)
        .then((res) => res.json())
        .then(tables => {
          console.log("tables are ", tables)
          dispatch(actions.setTablesForCurrentTheater(tables));
          return tables;
        })
        .catch(err => console.error(`Error setting current theater tables:`, err));
    });
    showingPromise.then((showing) => {
      const url = `/api/films/${showing.film_id}`;
      return fetch(url)
        .then((res) => res.json())
        .then(film => dispatch(actions.setCurrentFilm(film)))
        .catch(err => console.error(`Error setting current film:`, err));
    });
  }
  next(action);
}

// const fetchSeatsMiddleware = ({ getState, dispatch }) => next => action => {
//   if (action.type === actionTypes.FETCH_SEATS) {
//     const url = `/api/theaters/seats`;
//     fetch(url)
//       .then(res => res.json())
//       .then(seats => dispatch(actions.setSeats(seats)))
//       .catch(err => console.error(`Error getting seats:`, err));
//   }
//   next(action);
// }

// const fetchTablesMiddleware = ({ getState, dispatch }) => next => action => {
//   if (action.type === actionTypes.FETCH_TABLES) {
//     const url = `/api/theaters/tables`;
//     fetch(url)
//       .then(res => res.json())
//       .then(tables => dispatch(actions.setTables(tables)))
//       .catch(err => console.error(`Error getting tables:`, err));
//   }
//   next(action);
// }

const checkoutMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.CHECKOUT) {
    console.log('checking out');
    const url = `/api/checkout`;
    const postData = { method: "POST", body: { cart: action.cart } };
    fetch(url, postData)
      .then(res => {
        console.log("Raw results", res);
        if (!res.ok) {
          throw new Error('Error checking out')
        } else {
          return res.json();
        }
      })
      .then(res => console.warn('POST checkout succeeded', res))
  }
  next(action);
}

// Send username/password POST request
const loginMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === actionTypes.LOGIN) {
    const body = JSON.stringify({...action.user});
    console.log("body is",body)
    fetch(`/api/login`, {
      method:'POST',
      headers: {"Content-Type":`application/json`},
      body
    })
    .then(res => res.json())
    .then(console.log)
    .catch(console.error)
  }
  next(action);
}

// Send a POST request with the user info.
//const registerMiddleware = ???

const loggingMiddleware = ({ getState }) => next => action => {
  next(action);
  console.log("Just finished action", action, getState())
}

export default [
  checkoutMiddleware,
  fetchFilmsMiddleware,
  fetchInitialDataMiddleware,
  fetchReservationsForShowing,
  fetchTheatersMiddleware,
  fetchShowingMiddleware,
  fetchShowingsMiddleware,
  loginMiddleware,
  loggingMiddleware,
];