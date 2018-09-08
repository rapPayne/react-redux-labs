import React from 'react';

export function Cart(props) {
  const { contents } = props;
  console.log(props);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="3">Subtotal</td>
            <td>{getSubtotal(contents)}</td>
          </tr>
          <tr>
            <td colSpan="3">Tax</td>
            <td>{getTax(contents)}</td>
          </tr>
          <tr>
            <td colSpan="3">Total</td>
            <td>{getGrandTotal(contents)}</td>
          </tr>
        </tfoot>
        <tbody>

          {contents.seats && contents.seats.length > 0 ? contents.seats.map((s, idx) => {
            return (
              <tr key={idx}>
                <td>Reservation: Theater X, Table {lookupTable()}, Seat number {s.seat_number}</td>
                <td>1</td>
                <td>{s.price}</td>
                <td>{s.price}</td>
              </tr>
            )
          }
          ) : (<tr><td colSpan="4">No seats in your cart</td></tr>)}

          {contents.food && contents.food.length > 0 ? contents.food.map(f => {
            return (
              <tr>
                <td></td>
              </tr>
            )
          }) : (<tr><td colSpan="4">No food in your cart</td></tr>)
          }
        </tbody>
      </table>
    </div>
  )

  // Returns the grand total of everything in the customer's cart
  function getSubtotal(contents) {
    const seatsTotal = contents.seats.reduce((tot, seat) => tot + seat.price, 0);
    const foodTotal = 0;
    return seatsTotal + foodTotal;
  }

  // Returns the grand total of everything in the customer's cart
  function getTax(cart) {
    const tax = 0;
    return tax;
  }

  // Returns the grand total of everything in the customer's cart
  function getGrandTotal(contents) {
    return getSubtotal(contents) + getTax(contents);
  }

  // Returns the table number
  function lookupTable(tables, seat) {
    return 10;
  }
}