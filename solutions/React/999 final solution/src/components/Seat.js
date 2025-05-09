import { useDispatch } from 'react-redux';
import { actions } from '../store/actions';
import seatImage from '../bundledImages/seat.png';

export const Seat = (props) => {
  const dispatch = useDispatch();
  const { seat, currentShowing } = props;
  return (
    <div style={styles.seatWrapper}>
      <div onClick={() => reserveSeat(seat)} style={{ ...styles.seatItself, ...styles.seat[seat.status] }} >
        {seat.seat_number}
      </div>
    </div>
  );

  function reserveSeat(seat) {
    console.log(seat)
    switch (seat.status) {
      // case statuses.reserved:
      //   console.warn("Seat is reserved. Do nothing")
      //   break;
      case statuses.inMyCart:
        console.warn("inMyCart already")
        dispatch(actions.removeSeatFromCart(seat, currentShowing));
        break;
      case statuses.open:
        console.warn("open. Adding to cart")
        dispatch(actions.addSeatToCart(seat, currentShowing));
        break;
      default:
        dispatch(actions.addSeatToCart(seat, currentShowing));
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
