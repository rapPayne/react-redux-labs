import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { actions } from './store/actions';
import { store } from './store/store';

export const Login = withRouter((props) => {
  if (store.getState().user) {
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const redirectUrl = params.get('redirectUrl');
    props.history && props.history.push({ pathname: redirectUrl || "/" });
  }
  const showPassword = false;
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
        <input id="password" type={showPassword ? "text" : "password"} />
        <input type="submit" value="Login" />
      </form>
    </>
  )
});

function login(e) {
  e.preventDefault();
  store.dispatch(actions.login({ email: e.target['email'].value, password: e.target['password'].value }));
}