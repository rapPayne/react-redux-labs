
import { ReactElement, Suspense, use, useEffect, useTransition } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/scenes/LandingPage.tsx';
import { Account } from './components/authentication/Account.tsx';
import { Login } from './components/authentication/Login.tsx';
//import { Login } from './components/authentication/LoginActionState.tsx';
//import { Login } from './components/authentication/LoginTestServerAction.tsx';
import { Logout } from './components/authentication/Logout.tsx';
import { Checkout } from './components/scenes/Checkout.tsx';
import { PickSeats } from './components/scenes/PickSeats.tsx';
import { FilmDetails } from './components/scenes/FilmDetails.tsx';
import { NotFound } from './components/scenes/NotFound.tsx';
import { State, useStore } from './store/useStore.ts';
import { Convert as ConvertFilm, Film } from './types/Film.ts';
import { Convert as ConvertShowing } from './types/Showing.ts';
import { Convert as ConvertTheater } from './types/Theater.ts';
import { FilmList } from './components/FilmListWithUse.tsx';
// import { FilmList } from './components/FilmListWithFormActionAttr.tsx';
import { User } from './types/User.ts';
import { ResponsiveNavBar } from './components/ResponsiveNavBar.tsx';
import { Toaster } from 'react-hot-toast';

const filmsPromise =
  fetch("http://localhost:3008/films")
    .then(res => res.text())
    .then(json => ConvertFilm.toFilm(json));

// fetch("http://localhost:3008/films")
//   .then(res => res.text())
//   .then(json => ConvertFilm.toFilm(json))
//   .then(films => store.setFilms(films))
//   .catch(console.error);

export function App(): ReactElement {
  const store: State = useStore();
  const user: User | undefined = store.user;
  let films = store.films;
  if (!films) {
    films = use(filmsPromise)
    store.setFilms(films)
  }

  useEffect(() => {
    // Load initial data here
    // fetch("http://localhost:3008/films")
    //   .then(res => res.text())
    //   .then(json => ConvertFilm.toFilm(json))
    //   .then(films => store.setFilms(films))
    //   .catch(console.error);

    fetch("http://localhost:3008/theaters")
      .then(res => res.text())
      .then(json => ConvertTheater.toTheater(json))
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
        <header>
          <Toaster position="top-right" reverseOrder={true} />
          <ResponsiveNavBar user={user} />
        </header>
        <main className="mdl-layout__content">
          <Suspense fallback={<h1>Loading. Please wait ...</h1>}>
            {/* <FilmList filmsPromise={filmsPromise} /> */}
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