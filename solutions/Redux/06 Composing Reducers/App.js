import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import { Register } from './Register';
import { store } from './store/store';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(this.refresh);
    console.log("App state", this.state);
  }

  render() {
    return (
      <Register person={this.state.person} />
    );
  }

  refresh = () => {
    this.setState(store.getState());
  }
}

export default App;
