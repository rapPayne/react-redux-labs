import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css';
import { Register } from './Register';
import { store } from './store/store';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(this.refresh);
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Dinner And A Movie</h1>
        <nav>
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="login">login</a>
          <a href="checkout">Checkout</a>
        </nav>
        <Register person={this.state.user} />
      </div>
    );
  }

  refresh = () => {
    const newState = store.getState();
    this.setState(newState);
  }
}

export default App;
