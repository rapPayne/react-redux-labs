import { actions } from '../store';
import { actionTypes } from '../actions';

export const fetchShowingsMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_SHOWINGS) {
    const url = `/api/showings`;
    fetch(url)
      .then(res => res.json())
      .then(showings => dispatch(actions.setShowings(showings)))
      .catch(err => console.error(`Error fetching showings`, err));
  }
  next(action);
}
