export const actionTypes = {
  SET_NAME_FIRST: "SET_NAME_FIRST",
  SET_NAME_LAST: "SET_NAME_LAST",
  SET_NAME_TITLE: "SET_NAME_TITLE",
  SET_LOCATION_STREET: "SET_LOCATION_STREET",
  SET_LOCATION_CITY: "SET_LOCATION_CITY",
  SET_LOCATION_STATE: "SET_LOCATION_STATE",
  SET_LOCATION_POSTCODE: "SET_LOCATION_POSTCODE",
  SET_EMAIL: "SET_EMAIL",
  SET_CELL: "SET_CELL",
}

const setNameTitle = (title) => ({type: actionTypes.SET_NAME_TITLE, payload:{title}});
const setNameFirst = (first) => ({type: actionTypes.SET_NAME_FIRST, payload:{first}});
const setNameLast = (last) => ({type: actionTypes.SET_NAME_LAST, payload:{last}});

const setLocationStreet = (street) => ({type: actionTypes.SET_LOCATION_STREET, payload:{street}});
const setLocationCity = (city) => ({type: actionTypes.SET_LOCATION_CITY, payload:{city}});
const setLocationState = (state) => ({type: actionTypes.SET_LOCATION_STATE, payload:{state}});
const setLocationPostcode = (postcode) => ({type: actionTypes.SET_LOCATION_POSTCODE, payload:{postcode}});

const setEmail = (email) => ({type: actionTypes.SET_EMAIL, payload:{email}});
const setCell = (cell) => ({type: actionTypes.SET_CELL, payload:{cell}});

export const actions = {
  setNameTitle, setNameFirst, setNameLast,
  setLocationStreet, setLocationCity, setLocationState, setLocationPostcode, 
  setCell, setEmail,
};