import React from 'react';
import { store } from './store/store';
import { actions } from './store/actions';

import './Seat.css';

const selectSeat = (seat, isTaken, isSelected, table, theater, showing) => {
  if (isTaken)
    return;

  //dispatch an action to add this seat to the cart.
  store.dispatch(actions.addSeatToCart(seat, table, theater, showing));
}

const setSeatClasses = (isTaken, isSelected) => {
  const classes = ["chair"]
  isTaken ? classes.push("taken") : classes.push("available");
  isSelected && classes.push("selected");
  return classes.join(" ");
}

export function Seat(props) {
  return (
    <div 
      className={setSeatClasses(props.isTaken, props.isSelected)}
      onClick={e => selectSeat(props.seat, props.isTaken, props.isSelected, props.table, props.theater, props.showing)}>
      <div>
        <label>
          {props.seat.seat_number}
        </label>
      </div>
    </div>
  )


}
