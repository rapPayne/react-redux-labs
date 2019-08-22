import React, { Component } from 'react';
import { Button, DatePickerAndroid, DatePickerIOS, Platform, Text, View } from 'react-native';
import { store } from './store/store';

export class DatePicker extends Component {
  constructor() {
    super();
    this.state = { ...store.getState() };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { ...store.getState() };
  }

  render() {
    return (
      <View>
        <Button onPress={this.showModal}
          title={`Showing times for ${this.state.selected_date.toDateString()}`} />
        {this.state.showIOSPicker && <DatePickerIOS date={this.state.selected_date} onDateChange={this.setIOSDate} mode="date" />}
      </View>
    )
  }

  showModal = () => {
    if (Platform.OS === "android") {
      DatePickerAndroid.open()
        .then(date => store.dispatch(
          { type: "SET_SELECTED_DATE", date: new Date(date.year, date.month, date.day) }))
        .catch(err => console.error("Problem picking a date", err));
    } else {
      this.setState({ showIOSPicker: !this.state.showIOSPicker });
    }
  }

  setIOSDate = date => {
    store.dispatch({ type: "SET_SELECTED_DATE", date });
    this.setState({ showIOSPicker: !this.state.showIOSPicker });
  }
}