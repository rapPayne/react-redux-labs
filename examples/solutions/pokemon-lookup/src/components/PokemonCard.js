import { PokeImageBrowser } from './PokeImageBrowser'

export const PokemonCard = ({ pokemon }) => {
  return (
    <section style={styles.wrapper}>
      <PokeImageBrowser images={pokemon.sprites} />
      <p style={styles.id}>ID: {pokemon.id}</p>
      <h3 style={styles.name}>{pokemon.name}</h3>
      <table style={styles.propertiesTable}>
        <tbody>
          <tr><th style={styles.th}>Species</th><td style={styles.td}>{pokemon.species?.name}</td></tr>
          <tr><th style={styles.th}>Height</th><td style={styles.td}>{pokemon.height}</td></tr>
          <tr><th style={styles.th}>Weight</th><td style={styles.td}>{pokemon.weight}</td></tr>
          <tr><th style={styles.th}>Base experience</th><td style={styles.td}>{pokemon.base_experience}</td></tr>
          <tr><th style={styles.th}>Forms</th><td style={styles.td}>{pokemon.forms?.length}</td></tr>
        </tbody>
      </table>
      Moves: {pokemon.moves?.length} (need it to be a list)
    </section>
  )
}

const styles = {
  wrapper: {
    backgroundColor: 'var(--fawn)',
    padding: '20px',
    margin: 10,
    boxShadow: '5px 5px 5px var(--liver-dogs)',
    maxWidth: 350,
  },
  id: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5em',
    paddingTop: '10px',
    margin: 0,
  },
  name: {
    textTransform: 'capitalize',
    textAlign: 'center',
    paddingBottom: '5px',
    margin: 0
  },
  propertiesTable: {
    width: '100%',
    border: '1px solid var(--liver-dogs)',
    textAlign: 'center',
    listStyleType: 'none',
  },
  th: {
    textAlign: 'right',
  },
  td: {
    textAlign: 'left',
  }
}