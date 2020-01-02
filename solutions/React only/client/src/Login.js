import React from 'react';
import { Link } from 'react-router-dom';
import { actions } from './store/actions';
import { store } from './store/store';

export const Login = () => {
  const visibility = "password";
 return (
  <>
  <form onSubmit={login}>
   <h1>Login</h1>
   <div>
     <p>First time user? <Link to="/register">Register</Link></p>
   </div>
   <label>Email</label>
    <input id="email" />
    <label>Password</label>
    <input id="password" type={visibility} />
    <input type="submit" value="Login" />
    </form>
  </>
 )
}

function login(e) {
  e.preventDefault();
  store.dispatch(actions.login({email:e.target['email'].value, password:e.target['password'].value}));
}