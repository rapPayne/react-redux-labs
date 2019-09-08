import React from 'react';
import { Character } from './Character';

export const Characters = props => {
  const { characters } = props;

  return (
    <>
      <h1>Characters in the Marvel Universe</h1>
      <section style={styles.cardsLayout}>
        {characters.map(c => <Character key={c.id} character={c} />)}
      </section>
    </>
  )
}

function showCharacters(characters) {
  //if (! characters.length) return null;
  //const arrayOfCharacters = [];
  return characters.map(c => <Character character={c} />)
  // for (let character of characters) 
  //   arrayOfCharacters.push(
  //     <Character character={character} />)
  // return arrayOfCharacters;
}
const styles = {
  error: {
    backgroundColor: "pink",
    color: "red",
    fontWeight: "bolder",
    padding: "1em",
    border: "1px solid red",
    borderRadius: "10px",
    margin: "5px",
  },
  heroCard: {
    width: "100%",
    padding: "20px",
  },
  heroCardMenu: {
    color: "white",
  },
  heroCardName: {
    height: "52px",
    padding: "16px",
    background: "rgba(0, 0, 0, 0)",
  },
  cardsLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: "2em",
    gridColumnGap: "2em",
  }
}