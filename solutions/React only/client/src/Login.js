import React from 'react';
import { actions } from './store/actions';
import { store } from './store/store';

export const Login = () => {
  const visibility = "password";
 return (
  <>
  <form onSubmit={login}>
   <h1>Login</h1>
   <label>Username</label>
    <input id="username" />
    <label>Password</label>
    <input id="password" type={visibility} />
    <input type="submit" value="Login" />
    </form>
  </>
 )
}

function login(e) {
  e.preventDefault();
  store.dispatch(actions.login({username:e.target['username'].value, password:e.target['password'].value}));
}