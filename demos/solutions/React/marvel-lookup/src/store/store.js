import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { fetchCharactersMiddleware } from './middleware';

const initialState = {
 characterName: "Iron",
 characters: [],
};

export const store = createStore(reducer, initialState, applyMiddleware(fetchCharactersMiddleware));
