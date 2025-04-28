import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { fetchPersonMiddleware, middleware2 } from './middleware';

const initialState = {
  people: [{
    name: {
      first: "Tina",
      last: "Woodall",
    }
  }],
};

const middlewares = applyMiddleware(fetchPersonMiddleware, middleware2);

export const store = createStore(reducer, initialState, middlewares);