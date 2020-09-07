import { actions, actionTypes} from './actions';

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

const fetchInitialDataMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_INITIAL_DATA) {
    dispatch(actions.fetchFilms());
    dispatch(actions.fetchShowings());
    dispatch(actions.fetchTheaters());
  }
  next(action);
}

const fetchShowingsMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_SHOWINGS) {
    const url = `/api/showings`;
    fetch(url)
      .then(res => res.json())
      .then(showings => dispatch(actions.setShowings(showings)))
      .catch(err => console.error(`Error fetching showings`, err));
  }
  next(action);
}

const fetchTheatersMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_THEATERS) {
    const url = `/api/theaters`;
    fetch(url)
      .then(res => res.json())
      .then(theaters => dispatch(actions.setTheaters(theaters)))
      .catch(err => console.error(`Error fetching theaters`, err));
  }
  next(action);
}

const loggingMiddleware = ({getState, dispatch}) => next => action => {
  next(action);
  window.debugging && console.log("Just finished action", action, getState());
}

export const middleware = [
  fetchFilmsMiddleware,
  fetchInitialDataMiddleware,
  fetchShowingsMiddleware,
  fetchTheatersMiddleware,
  loggingMiddleware,
];