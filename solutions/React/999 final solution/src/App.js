import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.purple-indigo.min.css';
import 'material-design-lite/material';
import './helpers/Date';
import './helpers/Currency';
import './App.css';
import { Account } from './authentication/Account';
import { Checkout } from './Checkout';
import { FilmDetails } from './FilmDetails';
import { LandingPage } from './LandingPage';
import { Login } from './authentication/Login';
import { Logout } from './authentication/Logout';
import { NotFound } from './NotFound';
import { PickSeats } from './PickSeats';
import { actions } from './store/actions';

function App() {
  const state = useSelector(state => state);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchInitialData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <Link to="/" style={{ ...styles.navlink, ...styles.topMenuNavLink }} className="mdl-layout-title">Dinner and a Movie</Link>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              {user ?
                <>
                  <Link to="/account" className="mdl-layout__tab">My account</Link>
                  <Link to="/logout" className="mdl-layout__tab">logout</Link>
                  <Link to="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></Link>
                </>
                :
                <>
                  <Link to="/login" className="mdl-layout__tab">Login</Link>
                  <Link to="/register" className="mdl-layout__tab">Register</Link>
                </>
              }
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <Link to="/" style={{ ...styles.drawerNavLink, ...styles.navlink }} className="mdl-layout-title">Dinner and a Movie</Link>
          <nav className="mdl-navigation">
            {user ?
              <>
                <Link to="/account" className="mdl-layout__link">My account</Link>
                <Link to="/logout" className="mdl-layout__link">logout</Link>
                <Link to="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></Link>
              </>
              :
              <>
                <Link to="/login" className="mdl-layout__link">Login</Link>
                <Link to="/register" className="mdl-layout__link">Register</Link>
              </>
            }
          </nav>
        </div>
        <main className="mdl-layout__content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/account" element={<Account {...state} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Account />} />
            <Route path="/checkout" element={<Checkout {...state} />} />
            <Route path="/pickseats/:showingId" element={<PickSeats {...state} />} />
            <Route path="/film/:filmId" element={<FilmDetails {...state} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
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
