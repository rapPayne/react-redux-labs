import { createStore } from 'redux';

const initialState = {};
const reducer = (state, action) => {
  console.log("In the reducer",action);
  return state
};

export const store = createStore(reducer, initialState);
