import React, { Component } from 'react';
import { store } from './store/store';
import { actions } from './store/actions';
import { Cart } from './Cart';

export class Checkout extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.state.inProgress = false;
  }

  render() {
    console.log(this.state);
    return (
      <section>
        <h1>Checkout</h1>
        {this.state.inProgress ? <div><h1>Processing. Please wait.</h1></div> :
          <span>
            {this.state.cart ? <Cart contents={this.state.cart} /> : (
              <div><p>Nothing in your cart. Put some stuff in it and then come back here.</p></div>
            )}
            <button onClick={this.purchase}>Purchase</button>
          </span>}
      </section>
    )
  }

  purchase = (evt) => {
    this.setState({ ...this.state, inProgress: true }); // setState is async
    store.dispatch(actions.checkout(this.state.cart));
  }
}