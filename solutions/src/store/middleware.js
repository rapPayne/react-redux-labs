import { actionTypes, actions } from './actions';

export const fetchFilmsMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_FILMS) {
    const url = `/api/films`;
    fetch(url)
      .then(res => res.json())
      .then(films => dispatch(actions.setFilms(films)))
      .catch(err => console.error(`Error fetching films`, err));
  }
  next(action);
}
export const getShowingsTimesForFilmMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.SET_CURRENT_FILM) {
    const { showingDate } = getState();
    const { film } = action;
    const url = `/api/showings/${film.id}/${showingDate.toISOString()}`;
    fetch(url)
      .then(res => res.json())
      .then(showings => showings.map(s => { return { ...s, showing_time: new Date(s.showing_time) } }))
      .then(showings => dispatch(actions.setCurrentFilmShowings(showings)))
      .catch(err => console.error(`Error setting current film showings:`, err));
  }
  next(action);
}

// If we fetch the current showing, we should also fetch the current film,
// theater, tables, seats, and reservations
export const fetchShowingMiddleware = ({ getState, dispatch }) => next => action => {
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
    // const reservationsPromise = fetch(`/api/showings/${showingId}/reservations`)
    //   .then((res) => res.json())
    //   .then(reservations => {
    //     dispatch(actions.setReservationsForCurrentShowing(reservations));
    //     return reservations;
    //   })
    //   .catch(err => console.error(`Error setting reservations for the current showing:`, err));
    const theaterPromise = showingPromise.then((showing) => {
      const url = `/api/theaters/${showing.theater_id}`;
      return fetch(url)
        .then((res) => res.json())
        .then(theater => dispatch(actions.setCurrentTheater(theater)))
        .catch(err => console.error(`Error setting current theater:`, err));
    });
    const tablesPromise = showingPromise.then((showing) => {
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
    const filmPromise = showingPromise.then((showing) => {
      const url = `/api/films/${showing.film_id}`;
      return fetch(url)
        .then((res) => res.json())
        .then(film => dispatch(actions.setCurrentFilm(film)))
        .catch(err => console.error(`Error setting current film:`, err));
    });
  }
  next(action);
}

export const fetchSeatsForTableMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_SEATS_FOR_TABLE) {
    const { table } = action;
    if (table.id) {
      const url = `/api/theaters/${table.theater_id}/tables/${table.id}/seats`;
      fetch(url)
        .then(res => res.json())
        .then(seats => dispatch(actions.setSeatsForTable(table, seats)))
        .catch(err => console.error(`Error getting seats for current theater:`, err));
    };
  }
  next(action);
}

export const checkoutMiddleware = ({getState, dispatch}) => next => action => {
  if (action.type === actionTypes.CHECKOUT) {
    console.log('checking out');
    const url = `/api/checkout`;
    const postData = {method: "POST", body: {cart: action.cart}};
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