// Middleware responsible for making an Ajax Request.
export const fetchPersonMiddleware = ({getState, dispatch}) => next => action => {
  if (action.type === "FETCH_PEOPLE") {
  const url = `https://randomuser.me/api/?results=${action.howMany}`;
    fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .then(people => dispatch({type: "ADD_PEOPLE", people}));
  }
  next(action);
}

export const middleware2 = ({getState, dispatch}) => next => action => {
  console.log("fake middleware", action);
  next(action);
}