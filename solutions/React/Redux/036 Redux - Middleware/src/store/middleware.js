
const loggingMiddleware = ({getState, dispatch}) => next => action => {
  next(action);
  window.debugging && console.log("Just finished action", action, getState());
}

export const middleware = [
  loggingMiddleware,
];