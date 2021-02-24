import { createStore, applyMiddleware, StoreEnhancer } from 'redux';
import { actions } from './actions';
import { middlewares } from './middleware';
import { reducer } from './reducer';
import { AppState } from './AppState';

const initialState :AppState = {
  searchString: "",
};

const enhancers : StoreEnhancer<{},{}> = applyMiddleware(...middlewares)
export const store = createStore(reducer, initialState, enhancers, )