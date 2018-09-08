import React, { Component } from 'react';
//import { store } from './store/store';

export class Login extends Component {
  render() {
    return (
      <section>
        <h1>I'm the Login component</h1>
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Log in</button>
      </section>
    );
  }
}