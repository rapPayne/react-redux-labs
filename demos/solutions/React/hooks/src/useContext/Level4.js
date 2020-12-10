import { Level5 } from './Level5';

export const Level4 = ({ id }) => {
  return (
    <>
      <h1>Level4 component</h1>
      <p>ID is {id}</p>
      <Level5 id={id} />
    </>
  )
}