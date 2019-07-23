import React, { useState } from 'react';
import { Button, DatePickerAndroid, DatePickerIOS, Platform } from 'react-native';
import { store } from './store/store';

export const DatePicker = ({ selected_date }) => {
 const [showIosPicker, setShowIosPicker] = useState(false);  // state hook for toggling the DatePickerIOS
 return (
  <>
   <Button onPress={() => showModal({ showIosPicker, setShowIosPicker })} title={`Showing times for ${selected_date.toDateString()}`} />
   {showIosPicker && <DatePickerIOS date={selected_date} mode='date' onDateChange={date => setDate(date, setShowIosPicker)} />}
  </>
 );
}

// Button's onClick event handler. Toggles the iOS picker or opens the Android picker
function showModal({ showIosPicker, setShowIosPicker }) {
 switch (Platform.OS) {
  case "android":
   DatePickerAndroid
    .open()
    .then(date =>
     store.dispatch(
      { type: "SET_SELECTED_DATE", date: new Date(date.year, date.month, date.day) }))
    .catch(console.error);
   break;
  case "ios":
   setShowIosPicker(!showIosPicker);
   break;
  default:
   console.error(`${Platform.OS} is not supported yet.`);
 }
}

// Callback for the DatePickerIOS's onDateChange event
const setDate = (date, setShowIosPicker) => {
 store.dispatch({ type: "SET_SELECTED_DATE", date });
 setShowIosPicker(false);
};