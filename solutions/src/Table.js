import React from 'react';
import { Seat } from './Seat';
import PropTypes from 'prop-types';
//import { store } from './store/store';
//import { actions } from './store/actions';
import './Table.css';

export function Table(props) {
  function doStuff() {
    return (<h1>Yep</h1>)
  }
  return (
    <div className="theaterTableWrapper">
      <div className={"theaterTable theaterTable" + (props.table.seats && props.table.seats.length)}>
        <label className="tableNumber">{props.table.table_number}</label>
      </div>
        {props.table.seats && props.table.seats.map(seat =>
          (
            <Seat key={seat._id} seat={seat} table={props.table} theater={props.theater} showing={props.showing}
              isTaken={props.seatIsTaken(seat)} 
              isSelected={props.seatIsSelected(seat)} />
          )
        )}
    </div>
  );

  function foo() {
    console.error("To be implemented")
  }
}