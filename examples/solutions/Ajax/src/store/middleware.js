// Middleware responsible for making an Ajax Request.
export const fetchPersonMiddleware = ({getState, dispatch}) => next => action => {
  const url = 'https://randomuser.me/api/';
  if (action.type === "FETCH_PERSON") {
    fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .then(people => people[0])
    .then(person => dispatch({type: "ADD_PERSON", person}));
  }
  next(action);
}

export const middleware2 = ({getState, dispatch}) => next => action => {
  console.log("fake middleware", action);
  next(action);
}