import 'material-design-lite/dist/material.min.css';
import './site.css';
import { PokemonLookup } from "./components/PokemonLookup.jsx";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { AboutUs, ContactUs, Home } from './components/OtherComponents';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav style={styles.nav}>
            <ul style={styles.navUl}>
              <li style={styles.navUlLi}><Link to="/" style={styles.navUlLiA}>Home</Link></li>
              <li style={styles.navUlLi}><Link to="/lookup" style={styles.navUlLiA}>Lookup</Link></li>
              <li style={styles.navUlLi}><Link to="/aboutus" style={styles.navUlLiA}>About Us</Link></li>
              <li style={styles.navUlLi}><Link to="/contactus" style={styles.navUlLiA}>Contact Us</Link></li>
            </ul>
          </nav>
          <h1 style={styles.title}>Pokemon Central</h1>
        </header>
        <main>
          <Switch>
            <Route path="/lookup"><PokemonLookup /></Route>
            <Route exact path="/"><Home /></Route>
            <Route path="/aboutus"><aboutUs /></Route>
            <Route path="/contactus"><ContactUs /></Route>
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  title: {
    padding: 50,
  },
  nav: {
    backgroundColor: 'firebrick',
    color: 'white',
    position: 'fixed',
    top: 0, right: 0, left: 0,
  },
  navUl: {
    display: 'flex',
    listStyleType: 'none',
  },
  navUlLi: {
    padding: '10px',
    margin: 'auto 20px',
  },
  navUlLiA: {
    fontSize: '1.5em',
    color: 'white',
    textDecoration: 'none',
  }
}
export default App;

