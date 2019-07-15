import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store/store';
import { People } from './People';


function App() {
  const [people, setPeople] = useState(store.getState().people);
  store.subscribe(() => {
    console.log(people)
    setPeople(store.getState().people)
    console.log(people)
  });
  //store.dispatch({type: "FETCH_PEOPLE", howMany:2});
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