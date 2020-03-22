import React from 'react';
import { useHistory } from 'react-router-dom';

export const Checkout = ({ cart, user }) => {
  const history = useHistory();
  const foo = cart.seats.reduce((total, seat) => +total + seat.price, 0);
  console.log("foo is", foo)
  return (
    <>
      <h1>Checkout</h1>
      <p>Here's the stuff in your cart</p>
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--4dp">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>{cart.seats.length}</td>
            <td>{(cart.seats.reduce((total, seat) => total + seat.price, 0)).toCurrency()}</td>
          </tr>
        </tfoot>
        <tbody>
          {cart.seats.map(seat => makeTableRow(seat))}
        </tbody>
      </table>
      <button onClick={purchase} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton}>Buy</button>
      <p>TODO: Add authentication, registration, etc.</p>
    </>
  )
  function makeTableRow({seat_id, seat_number, price}) {
    return (
      <tr key={seat_id}>
        <td>{seat_number}</td>
        <td>{price.toCurrency()}</td>
        <td>1</td>
        <td>{price.toCurrency()}</td>
      </tr>
    )
  }
  function purchase() {
    if (user) {
      console.error('trying to purchase')
    } else {
      history.push({ pathname: '/login?returnUrl=/checkout' });
    }
    console.error("you clicked purchase", cart);
  }
};

const styles = {
  wrapper: {
    margin: "10px auto",
  },
  submitButton: {
    //width: "95%",
  },
}