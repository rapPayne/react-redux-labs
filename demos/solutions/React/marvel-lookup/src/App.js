import React, { Component } from 'react';
import 'react-mdl/extra/css/material.css';
import { store } from './store/store';
import { Characters } from './Characters';

class App extends Component {
  characters;
  state;
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState({ ...store.getState() }));
  }

  render() {
    return (
      <>
        <input type="text" onChange={e => store.dispatch({ type: "SET_CHARACTER_NAME", characterName: e.target.value })} />
        <input onClick={() => this.fetchCharacters(this.state.characterName)} type='button' value='fetch' />
        <Characters characters={this.state.characters} />
      </>
    );
  }

  fetchCharacters(characterName) {
    console.log(`fetching characters starting with ${characterName}`);
    store.dispatch({ type: 'FETCH_CHARACTERS', characterName });
  }

}

export default App;