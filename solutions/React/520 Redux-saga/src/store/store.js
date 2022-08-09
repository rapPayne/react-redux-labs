import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducers/main-reducer';
import cartReducer from './reducers/cart-reducer';
import filmsReducer from './reducers/films-reducer';
import reservationsReducer from './reducers/reservations-reducer';
import middlewares from './middleware';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas';


const initialState = {
  cart: { seats: [], food: [] },
  currentDate: new Date().setHours(0, 0, 0, 0),
  films: [],
  reservations: [],
  showings: [],
  theaters: [],
};


const combinedReducers = (state, action) => {
  return Object.assign({}, // Note: object spread operator will work here also
    mainReducer(state, action),
    { cart: cartReducer(state.cart, action) },
    { films: filmsReducer(state.films, action) },
    { reservations: reservationsReducer(state.reservations, action) },
  );
}

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(...middlewares, sagaMiddleware);
export const store = configureStore({
  reducer: combinedReducers,
  preloadedState: initialState,
  enhancers: storeEnhancer,
});
sagaMiddleware.run(rootSaga);
