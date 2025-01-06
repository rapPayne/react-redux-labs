
import { CSSProperties, ReactElement, Suspense, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/scenes/LandingPage.tsx';
import { Account } from './components/authentication/Account.tsx';
import { Login } from './components/authentication/LoginActionState.tsx';
import { Logout } from './components/authentication/Logout.tsx';
import { Checkout } from './components/scenes/Checkout.tsx';
import { PickSeats } from './components/scenes/PickSeats.tsx';
import { FilmDetails } from './components/scenes/FilmDetails.tsx';
import { NotFound } from './components/scenes/NotFound.tsx';
import { State, useStore } from './store/useStore.ts';
import { Convert as ConvertFilm } from './types/Film.ts';
import { Convert as ConvertShowing } from './types/Showing.ts';
import { Convert as ConvertTheater } from './types/Theater.ts';
import { FilmList } from './components/FilmList.tsx';

export function App(): ReactElement {
  const store: State = useStore();
  const user = {};

  useEffect(() => {
    // Load initial data here
    fetch("http://localhost:3008/films")
      .then(res => res.text())
      .then(json => ConvertFilm.toFilm(json))
      .then(films => store.setFilms(films))
      .catch(console.error);

    fetch("http://localhost:3008/theaters")
      .then(res => res.text())
      .then(json => ConvertTheater.toTheater(json))
      .then(foo => (console.log(foo), foo))
      .then(theaters => store.setTheaters(theaters))
      .catch(console.error);

    //TODO: This is super inefficient. Should only fetch showings we need.
    fetch("http://localhost:3008/showings")
      .then(res => res.text())
      .then(json => ConvertShowing.toShowing(json))
      .then(showings => store.setShowings(showings))
      .catch(console.error);

  }, []);

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
          <Suspense fallback={<h1>Loading. Please wait ...</h1>}>
            <FilmList />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Account />} />
              <Route path="/checkout" element={<Checkout cart={store.cart} user={store.user} />} />
              <Route path="/pickseats/:showingId" element={<PickSeats />} />
              <Route path="/film/:filmId" element={<FilmDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App

const styles: { [P: string]: CSSProperties } = {
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

