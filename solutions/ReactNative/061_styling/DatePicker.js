import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, DatePickerAndroid, DatePickerIOS, Platform, Text, View } from 'react-native';

export const DatePicker = ({ selected_date = new Date() }) => {
  const dispatch = useDispatch();
  const [showIosPicker, setShowIosPicker] = useState(false);
  return (
    <View>
      <Button onPress={() => showModal()}
        title={`Showing times for ${selected_date.toShowingDateString()}`} />
      {showIosPicker &&
        <DatePickerIOS date={selected_date} onDateChange={iosDateChanged} mode="date" />}
    </View>
  )

  function iosDateChanged(date) {
    dispatch({ type: "SET_SELECTED_DATE", date });
    setShowIosPicker(false);
  }
  async function showModal() {
    if (Platform.OS === "ios") {
      setShowIosPicker(true);
    }
    if (Platform.OS === "android") {
      const date = await DatePickerAndroid.open();
      dispatch({ type: "SET_SELECTED_DATE", date: new Date(date.year, date.month, date.day) })
    }
  }
}