import { actions } from '../store';
import { actionTypes } from '../actions';

export const fetchTheatersMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_THEATERS) {
    const url = `/api/theaters`;
    fetch(url)
      .then(res => res.json())
      .then(theaters => dispatch(actions.setTheaters(theaters)))
      .catch(err => console.error(`Error fetching theaters`, err));
  }
  next(action);
}
