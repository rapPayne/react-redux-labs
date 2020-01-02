import React from 'react';
import { store } from './store/store';
import { actions } from './store/actions';

export const Register = (props) => {
  const showPassword = false;
  return (
    <>
    <h1>Register</h1>
    <form onSubmit={register}>
      <label>Email</label>
      <input name="email" />
      <label>Password</label>
      <input name="password" type={showPassword ? "text" : "password"} />
      <label>First name (given name)</label>
      <input name="given" />
      <label>Last name (family name)</label>
      <input name="family" />
      <label>Phone</label>
      <input name="phone" />
      <label>Credit card</label>
      <input name="number" />
      <label>Expiration</label>
      <input name="expiration" type="date" />
      <input type='submit' value='Save' />
    </form>
    </>
  )

  function register(e) {
    e.preventDefault();
    const user = {
      email: e.target['email'].value,
      password: e.target['password'].value,
      name: { given: e.target['given'].value, family: e.target['family'].value },
      phone: e.target['phone'].value,
      credit_card: { number: e.target['number'].value, expiration: e.target['expiration'].value },
    };
    store.dispatch(actions.register(user));
  }
}