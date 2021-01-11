import { host } from './helpers';

const fetchFilmsMiddleware = ({dispatch, getState}) => next => action => {
  if (action?.type === "FETCH_FILMS") {
    fetch(`${host}/api/films`)
    .then(res => res.json())
    // .then(films => {
    //   console.log("*".repeat(80) + "FILMS" + "*".repeat(80));
    //   return films;
    // })
    .then(films => films.forEach(film => dispatch({type:"ADD_FILM",film})))
    .catch(err => console.error("Couldn't fetch films", err))
  } 
  next(action);
}
  
const logDispatchesMiddleware = ({dispatch, getState}) => next => action => {
  if (getState().log) console.log({BEFORE: {action, state:getState()}})
  next(action);
  if (getState().log) console.log({AFTER: {action, state:getState()}})
}
export default [ fetchFilmsMiddleware ];