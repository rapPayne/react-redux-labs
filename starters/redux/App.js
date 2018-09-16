import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import { Register } from './Register';
import * as user from './user.json';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Register person={user} />
    );
  }
}

export default App;
