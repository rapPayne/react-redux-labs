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
      <div>
        <section>
          <p>
            Welcome back! You were last here at {this.state.lastVisit}. The name was {this.state.name}.
          </p>
        </section>
      <Register person={this.state.person} />
      </div>
    );
  }

  refresh = () => {
    console.log(store.getState())
    this.setState(store.getState());
  }
}

export default App;
