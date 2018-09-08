// Wrestled with pulling the info needed for this page from
// state. But if we did that, the user would have been forced
// to go through a given workflow. Instead, if we pull the 
// info from the API, we only need the Route parameter showing_id.
// Slower, but closer to pure.
import React, { Component } from 'react';
import { store } from './store/store';
import { actions } from './store/actions';
import { Table } from './Table';

export class PickSeats extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.refresh);
    this.state = store.getState();
  }

  componentDidMount() {
    //Fetch the current showing, which will get the theater and all tables.
    store.dispatch(actions.fetchShowing(this.props.match.params.showingId));
  }

  refresh = () => {
    const state = store.getState();
    //console.log("pickseats state", state)
    this.setState(state);
  }

  render() {
    return (
      <section>
        <h1>Where would you like to sit?</h1>
        <div>{this.state.currentFilm.title}</div>
        <div>{this.state.currentShowing.showing_time}</div>
        <div>{this.state.currentTheater.name}</div>
        <div style={this.styles.seatmap}>
          {this.state.currentTheater.tables.map((table,i) => 
            <Table 
              key={i} foo="bar"
              table={table} theater={this.state.currentTheater} showing={this.state.currentShowing}
              seatIsTaken={this.seatIsTaken}
              seatIsSelected={this.seatIsSelected}
              />
            //</Table>
            )}
        </div>
        <button onClick={this.goToCheckout}>Checkout</button>
      </section>
    )
  }

  // Returns a boolean. True if seat passed in appears in the list of
  // reservations in the current showing. False otherwise.
  seatIsTaken = (seat) => {
    return !!this.state.currentShowing.reservations.find(r => r.seat_id === seat._id);
  }
  seatIsSelected = (seat) => {
    return !!this.state.cart.seats.find(s => s._id === seat._id);
  }

  goToCheckout = () => {
    this.props.history.push('/Checkout');
  }

  styles = {
    seatmap: {
      minWidth: "960px",
      display: "grid",
      gridTemplateColumns: "20% 20% 20% 20% 20%",
      gridTemplateRows: "auto"
    }
  }
}