import { createStore, applyMiddleware } from 'redux';
import { fetchNewsMiddleware } from './middleware';
import { actionTypes } from './actions';

const reducer = (state,action) => {
  if(!action) return state;
  switch(action.type) {
    case actionTypes.ADD_ARTICLE:
      return {...state, articles:[...state.articles, action.article]}
    default:
    return state;
  }
}



const initialState = {articles:[]};
const enhancers = applyMiddleware(fetchNewsMiddleware);
export const store = createStore(reducer, initialState, enhancers);