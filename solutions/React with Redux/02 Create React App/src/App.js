import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
