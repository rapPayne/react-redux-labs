import { actionTypes } from "./action-types";

const fetchCityAndState = postcode => ({ type: actionTypes.FETCH_CITY_AND_STATE, postcode});
const setEmail = email => ({ type: actionTypes.SET_EMAIL, email });
const setCell = cell => ({ type: actionTypes.SET_CELL, cell });
const setNameFirst = first => ({ type: actionTypes.SET_NAME_FIRST, first });
const setNameLast = last => ({ type: actionTypes.SET_NAME_LAST, last });
const setNameTitle = title => ({ type: actionTypes.SET_NAME_TITLE, title });
const setLocationStreet = street => ({ type: actionTypes.SET_LOCATION_STREET, street });
const setLocationCity = city => ({ type: actionTypes.SET_LOCATION_CITY, city });
const setLocationState = state => ({ type: actionTypes.SET_LOCATION_STATE, state });
const setLocationPostCode = postcode => ({ type: actionTypes.SET_LOCATION_POSTCODE, postcode });

export const actions = {
  fetchCityAndState, setEmail, setCell, setNameFirst, setNameLast, setNameTitle, setLocationStreet, setLocationCity, setLocationState, setLocationPostCode,
};