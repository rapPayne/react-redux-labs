import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';

const initialState = {
  people: [{
    name: {
      first: "Tina",
      last: "Woodall",
    }
  }],
};

export const store = createStore(reducer, initialState);