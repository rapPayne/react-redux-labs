
import { ReactElement, Suspense, use, useEffect } from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import '../App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from '../components/authentication/Account.tsx';
//import { Login } from './authentication/Login.tsx';
//import { Login } from './components/authentication/LoginActionState.tsx';
//import { Login } from './components/authentication/LoginTestServerAction.tsx';
//import { Logout } from './authentication/Logout.tsx';
import { NotFound } from './NotFound.tsx';
import { State, useStore } from '../store/useStore.ts';
import { Convert as ConvertFilm } from '../types/Film.ts';
import { Convert as ConvertShowing } from '../types/Showing.ts';
import { Convert as ConvertTheater } from '../types/Theater.ts';
import { FilmList } from '../components/FilmListWithUse.tsx';
// import { FilmList } from './components/FilmListWithFormActionAttr.tsx';
import { User } from '../types/User.ts';
import { ResponsiveNavBar } from '../components/ResponsiveNavBar.tsx';
import { Toaster } from 'react-hot-toast';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const filmsPromise =
  fetch("http://localhost:3008/films")
    .then(res => res.text())
    .then(json => ConvertFilm.toFilm(json));

// fetch("http://localhost:3008/films")
//   .then(res => res.text())
//   .then(json => ConvertFilm.toFilm(json))
//   .then(films => store.setFilms(films))
//   .catch(console.error);

function App(): ReactElement {
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
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header>
        <Toaster position="top-right" reverseOrder={true} />
        <ResponsiveNavBar user={user} />
      </header>
      <main className="mdl-layout__content">
        <Suspense fallback={<h1>Loading. Please wait ...</h1>}>
          <Outlet />
          {/* <FilmList filmsPromise={filmsPromise} /> */}
          {/* <Routes>
              X<Route path="/" element={<LandingPage />} />
              <Route path="/account" element={<Account />} />
              X<Route path="/login" element={<Login />} />
              X<Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Account />} />
              X<Route path="/checkout" element={<Checkout cart={store.cart} user={store.user} />} />
              X<Route path="/pickseats/:showingId" element={<PickSeats />} />
              X<Route path="/film/:filmId" element={<FilmDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes> */}
        </Suspense>
      </main>
      <footer>
      </footer>
      <TanStackRouterDevtools />
    </div>
  );
}

export const Route = createRootRoute({
  component: App,
})