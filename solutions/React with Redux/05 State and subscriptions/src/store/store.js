import { createStore } from 'redux';
import user from './user.json';

const initialState = { user:user };

const reducer = (state, action) => {
  if (action.type === "SET_CELL")
    return { ...state, user: { ...state.user, cell: action.cell } }
  if (action.type === "SET_EMAIL")
    return { ...state, user: { ...state.user, email: action.email } }
  if (action.type === "SET_NAME_FIRST")
    return { ...state, user: { ...state.user, name: { ...state.user.name, first: action.first } } }
};

export const store = createStore(reducer, initialState);
