import { actions, actionTypes } from "../actions"

export const fetchInitialDataMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_INITIAL_DATA) {
    dispatch(actions.fetchFilms());
    dispatch(actions.fetchShowings());
    dispatch(actions.fetchTheaters());
  }
  next(action);
}