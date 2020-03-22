import React from 'react';

export const NotFound = () => {
  console.log("NotFound");
  return (
    <>
      <h1>404 Not found</h1>
      <p>Oops! We couldn't find the thing you're asking for. Sorry about that!</p>
      <p>Maybe try one of these instead?</p>
      <ul>
        <li><a href="/">Find a movie</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </>
  )
}