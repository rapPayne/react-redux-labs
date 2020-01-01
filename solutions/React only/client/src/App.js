import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.purple-indigo.min.css';
import 'material-design-lite/material';
import './helpers/Date';
import './App.css';
import { store } from './store/store';
import { Account } from './Account';
import { Checkout } from './Checkout';
import { FilmDetails } from './FilmDetails';
import { LandingPage } from './LandingPage';
import { Login } from './Login';
import { PickSeats } from './PickSeats';
import { actions } from './store/actions';

function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => setState({ ...store.getState() }));
    store.dispatch(actions.fetchInitialData());
  }, []);

  return (
    <BrowserRouter>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <Link to="/" style={{ ...styles.navlink, ...styles.topMenuNavLink }} className="mdl-layout-title">Dinner and a Movie</Link>
            {/* <div class="mdl-layout-spacer"></div> */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link to="/account" className="mdl-layout__tab">My account</Link>
              <Link to="/login" className="mdl-layout__tab">Login</Link>
              <Link to="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">
            <Link to="/" style={{ ...styles.drawerNavLink, ...styles.navlink }} className="mdl-layout-title">Dinner and a Movie</Link>
          </span>
          <nav className="mdl-navigation">
            <Link to="/account" className="mdl-navigation__link">My account</Link>
            <Link to="/login" className="mdl-navigation__link">Login</Link>
            <Link to="/checkout" className="mdl-navigation__link"><i className="material-icons">shopping_cart</i></Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <Switch>
            <Route exact path="/" render={() => <LandingPage {...state} />} />
            <Route exact path="/account" render={() => <Account {...state} />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/checkout" render={() => <Checkout {...state} />} />
            <Route exact path="/pickseats/:showingId" render={() => <PickSeats {...state} />} />
            <Route exact path="/filmdetails/:filmId" render={() => <FilmDetails {...state} />} />
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
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
