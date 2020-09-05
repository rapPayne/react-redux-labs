import React, { useState, useEffect } from 'react';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.purple-indigo.min.css';
import './App.css';
import './helpers/Currency';
import './helpers/Date';
import 'material-design-lite/material';
import { store } from './store/store';
import { actions } from './store/actions';
import { LandingPage } from './LandingPage';
import { FilmDetails } from './FilmDetails';
import { PickSeats } from './PickSeats';
import { Checkout } from './Checkout';
import { NotFound } from './NotFound';
import { Login } from './authentication/Login';
import { Logout } from './authentication/Logout';
import { Account } from './authentication/Account';

function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => setState({ ...store.getState() }));
    store.dispatch(actions.fetchInitialData());
  }, []);
  console.log(store.getState());
  console.log(1234.567.toCurrency());
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a href="/" style={{ ...styles.navlink, ...styles.topMenuNavLink }} className="mdl-layout-title">Dinner and a Movie</a>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            {state.user ?
              <>
                <a href="/account" className="mdl-layout__tab">My account</a>
                <a href="/logout" className="mdl-layout__tab">logout</a>
                <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
              </>
              :
              <>
                <a href="/login" className="mdl-layout__tab">Login</a>
                <a href="/register" className="mdl-layout__tab">Register</a>
              </>}
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <a href="/" style={{ ...styles.drawerNavLink, ...styles.navlink }} className="mdl-layout-title">Dinner and a Movie</a>
        <nav className="mdl-navigation">
          {state.user ?
            <>
              <a href="/account" className="mdl-layout__link">My account</a>
              <a href="/logout" className="mdl-layout__link">logout</a>
              <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
            </>
            :
            <>
              <a href="/login" className="mdl-layout__link">Login</a>
              <a href="/register" className="mdl-layout__link">Register</a>
            </>}
        </nav>
      </div>
      <main className="mdl-layout__content">
        <FilmDetails />
      </main>
      <footer>
      </footer>
    </div>
  );
}

const styles = {
  navlink: {
    padding: '10px',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  drawerNavLink: {
    color: '#424242',
  },
  topMenuNavLink: {
    color: 'white',
  },
}

export default App;
