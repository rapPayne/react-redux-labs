import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import { Register } from './Register';
import { store } from './store/store';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(this.redraw);
    console.log(this.state);
  }
  render() {
    return (
      <Register person={this.state.person} />
    );
  }

  redraw = () => {
    const newState = store.getState();
    this.setState(newState);
  }
}

export default App;