import { ReactElement } from 'react';
import seatImage from '../bundledImages/seat.png';
import { Seat as SeatType } from '../types/Seat';
import { Showing } from '../types/Showing';
import { useStore } from '../store/useStore';

type Props = { seat: SeatType, currentShowing: Showing };

export const Seat = (props: Props): ReactElement => {
  const { seat, currentShowing } = props;
  const store = useStore();

  return (
    <div style={styles.seatWrapper}>
      <div onClick={() => reserveSeat(seat)} style={{ ...styles.seatItself, ...styles.seat[seat.status ?? "open"] }} >
        {seat.seat_number}
      </div>
    </div>
  );

  function reserveSeat(seat: SeatType) {
    console.log(seat)
    switch (seat.status) {
      // case statuses.reserved:
      //   console.warn("Seat is reserved. Do nothing")
      //   break;
      case statuses.inMyCart:
        console.log("inMyCart already. Removing from cart")
        store.removeFromCart({ seat, showing: currentShowing });
        break;
      case statuses.open:
        store.addToCart({ seat, showing: currentShowing });
        break;
    }
  }
}

const styles = {
  seatWrapper: {
    margin: "5px",
  },
  seatItself: {
    backgroundImage: `url(${seatImage})`,
    backgroundSize: "100% 100%",
    width: "30px",
    height: "30px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px 10px 0px 0px",
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
