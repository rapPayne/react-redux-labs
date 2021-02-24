import { createStore, applyMiddleware, AnyAction } from 'redux';
import { fetchNewsMiddleware, loggingMiddleware } from './middleware';
import { actionTypes } from './actions';
import { State } from '../types/State';


const reducer = (state: State = initialState, action: AnyAction): State => {
  if(!action) return state;
  switch(action.type) {
    case actionTypes.ADD_ARTICLE:
      return {...state, articles:[...state.articles, action.article]}
    default:
    return state;
  }
}

const initialState: State = {articles:[]};
const enhancers = applyMiddleware(loggingMiddleware, fetchNewsMiddleware);
export const store = createStore(reducer, initialState, enhancers);