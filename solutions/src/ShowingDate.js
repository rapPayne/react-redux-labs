import React, { Component } from 'react';
import { store } from './store/store';
import { actions } from './store/actions';

export class ShowingDate extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div>
        <label htmlFor="showingDate">Pick a day to see a show</label>
        <input type="date" onChange={this.pickDate} id="showingDate" value={this.state.date.toISOString().slice(0, 10)} />
      </div>
    );
  }

  pickDate = (e) => {
    const date = new Date(e.target.value);
    this.setState({ date })
    store.dispatch(actions.setShowingDate(date));
  }
}