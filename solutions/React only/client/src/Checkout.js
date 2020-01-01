import React from 'react';

export const Checkout = (props) => {
  console.log(props);
  const { cart } = props;
  const foo = cart.seats.reduce((total,seat) => +total+seat.price,0);
  console.log("foo is",foo)
  return (
    <>
      <h1>Checkout</h1>
      <p>Here's the stuff in your cart</p>
      <table>
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
            <td>{cart.seats.reduce((total, seat) => total + 1, 0)}</td>
            <td>{cart.seats.reduce((total, seat) => total + seat.price, 0)}</td>
          </tr>
        </tfoot>
        <tbody>

          {cart.seats.map(seat => (
            <tr><td>{seat.seat_number}</td><td>{seat.price}</td><td>1</td><td>{seat.price}</td></tr>
          ))}

        </tbody>
      </table>
      <button onClick={purchase}>Buy</button>
      <p>TODO: Add authentication, registration, etc.</p>
      <section>

      </section>
    </>
  )

  function purchase() {
    console.error("you clicked purchase", cart);
  }
}