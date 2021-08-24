import { actions } from './actions';
import { actionTypes } from './action-types';

export const historyMiddleware = ({ getState, dispatch }) => next => action => {
  const history = JSON.parse(sessionStorage.appHistory || "[]");
  history.push({ action, state: getState() });
  sessionStorage.appHistory = JSON.stringify(history);
  next(action);
}

export const fetchCityAndStateMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.FETCH_CITY_AND_STATE) {
    console.log("called fetch");
    const url = `http://api.zippopotam.us/us/${action.postcode}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
      const city=res.places[0]["place name"];
      const state=res.places[0].state;
      dispatch(actions.setLocationCity(city));
      dispatch(actions.setLocationState(state));
    })
  }
  next(action);
}