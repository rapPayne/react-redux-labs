import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import { Register } from './Register';
import { store } from './store';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    console.log('App state', this.state);
  }
  render() {
    return (
      <Register person={this.state} />
    );
  }
}

export default App;
