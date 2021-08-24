export const historyMiddleware = ({ getState, dispatch }) => next => action => {
  const history = JSON.parse(sessionStorage.appHistory || "[]");
  history.push({ action, state: getState() });
  sessionStorage.appHistory = JSON.stringify(history);
  next(action);
}