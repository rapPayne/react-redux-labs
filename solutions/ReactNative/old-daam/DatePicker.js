import React from 'react';
import { Button, View } from 'react-native';
import { Platform, DatePickerAndroid, DatePickerIOS } from 'react-native';
import { store } from 'redux';


export const DatePicker = ({selected_date}) => {
  return (
    <View>
      <Button onPress={() => showModal()} 
  title={`Showing times for ${selected_date.toDateString()}`} />

    </View>
  )

  function showModal() {
    if (Platform.OS === "android") {
pickDate();
  }
  {Platform.OS === "ios" &&
  <DatePickerIOS date={new Date()} onDateChange={date => console.log({ date })} />
}
  }
  function pickDate() {
    console.log("picking date")
    DatePickerAndroid.open()
      .then(date => {
        store.dispatch( 
        {type: "SET_SELECTED_DATE", date:new Date(date.year, date.month, date.day)})
        })
      .catch(err => console.error("Error picking the date", err))
  }
}