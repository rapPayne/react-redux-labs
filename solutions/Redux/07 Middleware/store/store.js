import { createStore, applyMiddleware } from 'redux';
import * as user from '../user.json';
import reducer from './reducers';
import { saveToLocalStorageMiddleware } from './middleware';

const initialState = { person: user };
const middleware = applyMiddleware(saveToLocalStorageMiddleware);

export const store = createStore(reducer, initialState, middleware);

// Read values from localStorage
const lastVisit = localStorage["lastVisit"];
const name = localStorage['name'];
store.dispatch({ type: "SET_FULL_NAME", name });
store.dispatch({ type: "SET_LAST_VISIT", lastVisit });