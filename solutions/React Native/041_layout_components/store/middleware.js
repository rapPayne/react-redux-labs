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

const loggingMiddleware = ({ getState }) => next => action => {
  if (getState().logging_enabled) {
    console.log({ action, state: getState() });
  }
  next(action);

}
export default [fetchFilmsMiddleware, loggingMiddleware];