/*eslint-env browser*/
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NewsList from './NewsList';
import { StockMarket } from './StockMarket';
import { Login } from './authentication/Login';
import { Logout } from './authentication/Logout';
import { Register } from './authentication/Register';
import { Secret } from './Secret';

import 'material-design-lite/dist/material.blue-green.min.css'

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState();
  //const [user, setUser] = useState(  { id: 5, username: "mo@test.com", password: "pass", first: "Mo", last: "Zith" }  );

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?apiKey=7a78cc5c25f1499fb2092e462d7694a8&country=us")
      .then(res => res.json())
      .then(payload => {
        const theStories = payload.articles;
        setArticles(theStories);
      })
      .catch(err => console.error('problem fetching articles', err))
  }, []);

  // If user exists, we're logged in. No user means not logged in.
  const loggedIn = !!user;

  return (
    <BrowserRouter>
      <div className="App">
        <header>

          <nav className="mdl-navigation" style={styles.navMenu}>
            <Link className="mdl-navigation__link" to="/news">News</Link>
            <Link to="/secret" className="mdl-navigation__link">Secret</Link>
            <Link to="/makemoney" className="mdl-navigation__link">Stock Market</Link>
            {loggedIn || <Link to="/register" className="mdl-navigation__link">Register</Link>}
            {loggedIn && <Link to="/logout" className="mdl-navigation__link">Sign out</Link>}
            {user && <span>Hi, {user.first} {user.last}</span>}
          </nav>

          <button id="demo-menu-lower-left"
            className="mdl-button mdl-js-button mdl-button--icon">
            <p>menu</p>
          </button>

          <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
            htmlFor="demo-menu-lower-left">
            <li className="mdl-menu__item"><Link to="/news">News</Link></li>
            <li className="mdl-menu__item mdl-menu__item--full-bleed-divider"><Link to="/secret">Secret</Link></li>
            <li className="mdl-menu__item"><Link to="/makemoney">Stock Market</Link></li>
          </ul>

        </header>
        <Route path="/news" render={() => <NewsList articles={articles} />} />
        <Route path="/secret">
          {loggedIn ?
            <Secret />
            :
            <Login setUser={setUser} />}
        </Route>
        <Route path="/makemoney" component={StockMarket} />
        <Route path="/register">
          <Register setUser={setUser} />
        </Route>
        <Route path="/logout">
          <Logout setUser={setUser} />
        </Route>
      </div>
    </BrowserRouter>
  );

}

const styles = {
  navMenu: {
    padding: "20px",
    justifyContent: "space-around",
    backgroundColor: "pink",
  }
}
