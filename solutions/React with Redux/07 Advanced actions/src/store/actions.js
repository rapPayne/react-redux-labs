import { actionTypes } from "./action-types";

const setEmail = email => ({type:actionTypes.SET_EMAIL, email});
const setCell = cell => ({type:actionTypes.SET_CELL, cell});
const setNameFirst = first => ({type:actionTypes.SET_NAME_FIRST, first});
const setNameLast = last => ({type:actionTypes.SET_NAME_LAST, last});
const setLocationStreet = street => ({type:actionTypes.SET_LOCATION_STREET, street});

export const actions = {
  setEmail, setCell, setNameFirst, setNameLast, setLocationStreet,
};