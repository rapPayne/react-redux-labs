const fetchFilmsMiddleware = ({dispatch, getState}) => next => action => {
  if (action?.type === "FETCH_FILMS") {
    fetch("http://localhost:3007/api/films")
    .then(res => res.json())
    .then(films => films.forEach(film => dispatch({type:"ADD_FILM",film})))
    .then(console.log);
  }
  next(action);
}
  
const logDispatchesMiddleware = ({dispatch, getState}) => next => action => {
  getState().log && console.log({BEFORE: {action, state:getState()}})
  next(action);
  getState().log && console.log({AFTER: {action, state:getState()}})
}
export default [ fetchFilmsMiddleware, logDispatchesMiddleware ];