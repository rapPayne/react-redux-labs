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
    <section style={styles.wrapper}>
      <form onSubmit={login}>
        <h1>Login</h1>
        <div>
          <p>First time user? <Link to="/register">Register</Link></p>
        </div>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
          <input id="email" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="email">Email</label>
        </div>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
          <input id="password" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="email">Password</label>
        </div>

        <input type="submit" value="Login"  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />

      </form>
    </section>
  )
});

function login(e) {
  e.preventDefault();
  store.dispatch(actions.login({ email: e.target['email'].value, password: e.target['password'].value }));
}

const styles = {
  wrapper: {
    padding: "20px",
  },
  inputDivs: {
    display: "block",
  },
  submitButton: {
    width: "95%",
  },
}