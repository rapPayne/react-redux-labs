import { rootReducer } from './rootReducer';
import { cartReducer } from './cartReducer';

export const reducer = (state, action = {}) => (
  {
    ...rootReducer(state, action),
    cart: cartReducer(state.cart, action),
  }
);
