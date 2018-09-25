export const loggingMiddleware = ({getState, dispatch}) => next => action => {
  console.log(action.type, getState())
  next(action);
  console.warn(action.type, getState())
}