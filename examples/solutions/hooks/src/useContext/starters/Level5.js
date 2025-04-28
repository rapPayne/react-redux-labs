// Import the context and useContext
//import { useContext } from 'react';
//import { toggleContext } from './UseContextDemo';

export const Level5 = ({id}) => {
  // Read the value from the Context
  //const toggle = useContext(toggleContext);
  return (
    <>
      <h1>Level5 component</h1>
      {/* <p>toggle is {toggle.toString()}</p> */}
      <p>ID is {id}</p>
    </>
  )
}