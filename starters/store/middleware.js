import { actionTypes, actions } from './actions';

const fetchInitialDataMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_INITIAL_DATA) {
    dispatch(actions.fetchFilms());
    dispatch(actions.fetchShowings());
    dispatch(actions.fetchTheaters());
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

const loggingMiddleware = ({ getState, dispatch }) => next => action => {
  next(action);
  window.debugging && console.log("Just finished action", action, getState());
}

// Send username/password POST request
const loginMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === actionTypes.LOGIN) {
    const body = JSON.stringify({ ...action }); // email and password
    fetch(`/api/login`, {
      method: 'POST',
      headers: { "Content-Type": `application/json` },
      body
    })
      .then(res => res.json())
      .then(user => dispatch(actions.setUser(user)))
      .catch(console.error)
  }
  next(action);
}

// Un-authenticate
const logoutMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === actionTypes.LOGOUT) {
    const { sessionId } = getState();
    const body = { sessionId };
    fetch(`/api/logout`, {
      method: 'POST',
      headers: { "Content-Type": `application/json` },
      body
    })
      .catch(console.error);
    dispatch(actions.setUser(undefined));
  }
  next(action);
}

// Send a POST request with the user info.
const registerMiddleware = ({ dispatch, getState }) => next => action => {
  //TODO: Handle a non-201 response with an error toast or snackbar
  if (action.type === actionTypes.REGISTER) {
    // Making sure we have at minimum, an email and password.
    const { email, password, name, phone, credit_card } = action.user;
    if (!email || !password) throw new Error("Need an email and password to register");
    const body = JSON.stringify({ ...action.user });
    fetch(`/api/users`, {
      method: 'POST',
      headers: { "Content-Type": `application/json` },
      body
    })
      .then(res => res.json())
      .then(user => dispatch(actions.setUser(user)))
      .catch(console.error)
  }
  next(action);
}

export const middleware = [
  checkoutMiddleware,
  fetchFilmsMiddleware,
  fetchInitialDataMiddleware,
  fetchReservationsForShowing,
  fetchTheatersMiddleware,
  fetchShowingMiddleware,
  fetchShowingsMiddleware,
  loginMiddleware,
  logoutMiddleware,
  loggingMiddleware,
  registerMiddleware,
];