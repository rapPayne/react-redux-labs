import { actionTypes } from "../actions";

const currentTheaterReducer = (state = {}, action) => {
  // console.log("curr theater", action, state)

  switch (action.type) {
    case actionTypes.SET_CURRENT_THEATER:
      return { ...state, ...action.theater };
    case actionTypes.SET_TABLES_FOR_CURRENT_THEATER:
      return { ...state, tables: [...action.tables] };
    default:
      return state;
  }
}

export default currentTheaterReducer;