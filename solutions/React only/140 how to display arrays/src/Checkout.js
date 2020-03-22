import React from 'react';

export const Checkout = () => {
  console.log("Checkout");
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
            <td>TOTAL_QUANTITY_HERE</td>
            <td>TOTAL_MONEY_HERE</td>
          </tr>
        </tfoot>
        <tbody>
        </tbody>
      </table>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton}>Buy</button>
      <p>TODO: Add authentication, registration, etc.</p>
    </>
  )
}
const styles={};