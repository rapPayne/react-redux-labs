import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends Component {
  render() {
    return (
    <div>
    <h1>404</h1>
    That page doesn't seem to exist.
    Want to try one of these instead?
    <Link to="/">All movies</Link>
    </div>
  );
}
}