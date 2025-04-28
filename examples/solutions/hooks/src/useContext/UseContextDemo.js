import { useState, createContext } from 'react';
import { makeUuid } from '../helpers/uuid';
import { Level1 } from './Level1';
export const id = makeUuid();

// This flags the 'toggle' value as something that can 
// be read by any component below this one no matter how 
// many levels deep the reader is nested.
export const toggleContext = createContext(null);

export const UseContextDemo = () => {
  const [toggle, setToggle] = useState(true);

  // The Provider components below allow the end user to
  // set a value. The value is 'transmitted' down to all
  // consumers nested within this.
  return (
    <div>
      <h1>Top Level component</h1>
      <p>ID is {id}</p>
      <input checked={toggle} onChange={e => setToggle(e.target.checked)} value="foo" type="checkbox" style={styles.toggle} />
      <p>{toggle ? "On" : "Off"}</p>
      <toggleContext.Provider value={toggle}>
        <Level1 id={id} />
      </toggleContext.Provider>
    </div>
  )
}

const styles = {}