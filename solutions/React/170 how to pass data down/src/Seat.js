import { useDispatch } from 'react-redux';
import { actions } from './store/actions';
import seatImage from './bundledImages/seat.png';

export const Seat = ({ seat, currentShowing }) => {
  const dispatch = useDispatch();
  return (
    <div style={styles.seatWrapper}>
      <div onClick={e => reserveSeat(seat)} style={{ ...styles.seatItself }} >
        {seat.seat_number}
      </div>
    </div>
  );
  function reserveSeat(seat) {
    console.log(seat);
    dispatch(actions.addSeatToCart(seat, currentShowing));
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
};