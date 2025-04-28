import { useState, useEffect } from 'react'
import { PokemonCard } from './PokemonCard'
export function PokemonLookup() {
  const [pokemons, setPokemons] = useState([])
  const [foundPokemons, setFoundPokemons] = useState([])
  const [chosenPokemon, setChosenPokemon] = useState({})
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=10000`;
    fetch(url)
      .then(res => res.json())
      .then(res => res.results)
      .then(results => setPokemons(() => results))
  }, []);

  return (
    <>
      <h2>Pokemon Lookup</h2>
      <div className="mdl-textfield mdl-js-textfield">
        <input id="searchString" onChange={e => search(e.target.value)} autoComplete="off" className="mdl-textfield__input" style={styles.searchBox} />
        <label className="mdl-textfield__label" htmlFor="searchString">Pokemon name</label>
      </div>
      <section style={styles.widgetsSection}>
        {foundPokemons.map(pokemon => (
          <div onClick={() => getOnePokemon(pokemon)} style={styles.widget}>
            {pokemon.name}
          </div>
        ))}
      </section>
      <select onChange={e => getOnePokemon(foundPokemons[e.target.selectedIndex - 1])} className="mdl-textfield__input">
        <option>Select one ...</option>
        {foundPokemons.map((pokemon, index) => <option key={index}>{pokemon.name}</option>)}
      </select>
      {chosenPokemon.name && <PokemonCard pokemon={chosenPokemon} />}
    </>
  )

  function search(searchString) {
    try {
      const found = pokemons.filter(p => p.name.match(searchString))
      setFoundPokemons(found)
    }
    catch (e) {
    }
  }

  function getOnePokemon(pokemon) {
    const url = pokemon.url;
    fetch(url)
      .then(res => res.json())
      .then(pokemon => setChosenPokemon(pokemon))
  }

}

const styles = {
  searchBox: {
    fontSize: "1.5em",
  },
  widgetsSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  widget: {
    minWidth: 100,
    padding: 20,
    margin: 10,
    textAlign: 'center',
    fontSize: '1.5em',
    backgroundColor: 'var(--fawn)',
    color: 'var(--kombu-green)',
    borderRadius: 5,
    boxShadow: '5px 5px 5px grey',
  }
}