import { actionTypes } from "../actions";

const currentShowingReducer = (state = {}, action) => {

  switch (action.type) {
    case actionTypes.SET_CURRENT_SHOWING:
      const newState = { ...state, ...action.showing };
      return newState;
    default:
      return state;
  }
}

export default currentShowingReducer;