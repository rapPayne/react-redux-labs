import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = (props) => {
  return (
    <>
      <h1>404 Not found</h1>
      <p>Oops! We couldn't find the thing you're asking for. Sorry about that!</p>
      <p>Maybe try one of these instead?</p>
      <ul>
        <li><Link to="/">Find a movie</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </>
  )
}