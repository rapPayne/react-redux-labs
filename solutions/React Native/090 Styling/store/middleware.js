const fetchFilmsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === "FETCH_FILMS") {
    fetch("http://localhost:5000/api/films")
      .then(res =>  res.json())
      .then(films => films.forEach(film => dispatch({ type: "ADD_FILM", film })))
      .catch(err => console.error("Couldn't fetch films", err))
  }
  next(action);
}

export default [fetchFilmsMiddleware];
