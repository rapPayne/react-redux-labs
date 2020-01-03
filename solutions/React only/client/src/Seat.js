import React from 'react';
import { store } from './store/store';
import { actions } from './store/actions';

export const Seat = (props) => {
  const { seat, currentShowing } = props;
  return (
    <div style={styles.wrapper}>
      <div onClick={() => reserveSeat(seat)} style={{...styles.seatItself, ...styles.seat[seat.status]}} >
          {seat.seat_number}
      </div>
    </div>
  );

  function reserveSeat(seat) {
    console.log(seat)
    switch (seat.status) {
      case statuses.reserved:
        console.warn("Seat is reserved. Do nothing")
        break;
      case statuses.inMyCart:
        store.dispatch(actions.removeSeatFromCart(seat, currentShowing));
        break;
      case statuses.open:
        store.dispatch(actions.addSeatToCart(seat, currentShowing));
        break;
      default:
        store.dispatch(actions.addSeatToCart(seat, currentShowing));
    }
  }
}

const styles = {
  wrapper: {
    margin: "5px",
  },
  seatItself: {
    background: "url(/img/seat.png)",
    backgroundSize: "100% 100%",
    width: "30px",
    height: "30px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  seat: {
    baseStyle: {
    },
    open: {
      backgroundColor: "white",
    },
    reserved: {
      backgroundColor: "red",
    },
    inMyCart: {
      backgroundColor: "orange",
    }
  }
}

const statuses = { open: "open", inMyCart: "inMyCart", reserved: "reserved" };
