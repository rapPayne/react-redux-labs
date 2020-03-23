import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { actions } from '../store/actions';
import { store } from '../store/store';

export const Login = () => {
  const [showPassword, setShowPassword ] = useState(false);
  console.log("Login");
  return (
    <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Login</h1>
      </div>
      <div className="mdl-card__supporting-text">
        <div>
          <p>First time user? <Link to="/account">Register</Link></p>
        </div>
        <form onSubmit={login}>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <input id="email" className="mdl-textfield__input" />
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <input id="password" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
              <span onClick={e=>setShowPassword(!showPassword)}>{showPassword ? "hide" : "show"}</span>
              <label className="mdl-textfield__label" htmlFor="email">Password</label>
            </div>
          </div>

          <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />

        </form>
      </div>
    </section>
  );
  function login(e) {
    e.preventDefault();
    store.dispatch(actions.login({ 
      email: e.target['email'].value, 
      password: e.target['password'].value }));
  }
  
}

const styles = {
  wrapper: {
    margin: "10px auto",
  },
  inputDivs: {
    display: "block",
  },
  submitButton: {
    width: "95%",
  },
}