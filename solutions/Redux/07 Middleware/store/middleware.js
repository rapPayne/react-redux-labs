
export const saveToLocalStorageMiddleware = ({ getState, dispatch }) => next => action => {
  next(action);
  const { first, last } = getState().person.name;
  localStorage["name"] = `${first} ${last}`;
  localStorage["lastVisit"] = new Date();;
};
