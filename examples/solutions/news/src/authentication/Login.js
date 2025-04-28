import React, { useState, useRef } from 'react';
import { login } from './fake_auth';

export const Login = ({ setUser }) => {
  const [error, setError] = useState({});
  const usernameRef = useRef();
  const passwordRef = useRef();
  console.log("error", error);

  const obj = useRef({ test: "test1" });

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        login(usernameRef.current.value, passwordRef.current.value)
          .then(user => setUser(user))
          .catch(err => {
            setUser(undefined);
            setError(err);
          });
      }
      }>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input ref={usernameRef} className="mdl-textfield__input" type="text" id="username" />
          <label className="mdl-textfield__label" htmlFor="username">Username</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input ref={passwordRef} className="mdl-textfield__input" type="password" id="password" />
          <label className="mdl-textfield__label" htmlFor="password">Password</label>
        </div>
        <div>
          <input type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Login" />
        </div>
      </form>
    </>
  )
}