
export const actionTypes = {
  SET_EMAIL: "SET_EMAIL",
  SET_CELL: "SET_CELL",
  SET_FIRST_NAME: "SET_FIRST_NAME",
  SET_TITLE: "SET_TITLE",
  SET_LAST_NAME: "SET_LAST_NAME",
  SET_STREET: "SET_STREET",
  SET_CITY: "SET_CITY",
  SET_POSTCODE: "SET_POSTCODE",
  SET_STATE: "SET_STATE",
};

const setEmail = email => ({type:actionTypes.SET_EMAIL, email});
const setCell = cell => ({type:actionTypes.SET_CELL, cell});

export const actions = {
  setEmail,
  setCell,
}