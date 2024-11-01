import { useNavigate } from 'react-router-dom';
import { Seat } from '../../types/Seat';
import { toCurrency } from '../../helpers/Currency';
import { Cart, CartItem } from '../../types/Cart';
import { User } from '../../types/User';
import { ReactElement } from 'react';

type Props = {
  cart: Cart;
  user: User | undefined;
}

export const Checkout = ({ cart, user }: Props): ReactElement => {
  const navigate = useNavigate();
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
            <td>{cart?.length}</td>
            <td>toCurrency() {(cart?.reduce((total: number, cartItem: CartItem) => total + (cartItem.seat.price ?? 0), 0))}</td>
          </tr>
        </tfoot>
        <tbody>
          {cart?.map((cartItem: CartItem) => makeTableRow(cartItem.seat))}
        </tbody>
      </table>
      <button onClick={purchase} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton}>Buy</button>
      <p>TODO: Add authentication, registration, etc.</p>
    </>
  )
  //TODO: Add movie,theater, showing_time
  function makeTableRow({ id, seat_number, price }: Seat) {
    return (
      <tr key={id}>
        <td>{seat_number}</td>
        <td>{toCurrency(price ?? 0)}</td>
        <td>1</td>
        <td>{toCurrency(price ?? 0)}</td>
      </tr>
    )
  }
  function purchase() {
    if (user) {
      console.error('To be implemented: trying to purchase')
    } else {
      navigate('/login?returnUrl=/checkout');
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