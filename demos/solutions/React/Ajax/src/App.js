import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store/store';
import { People } from './People';


function App() {
  const [people, setPeople] = useState(store.getState().people);
  store.subscribe(() => setPeople(store.getState().people));
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <People people={people} />
      </main>
    </div>
  );
}

export default App;