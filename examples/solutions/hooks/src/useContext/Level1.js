import { Level2 } from './Level2';

export const Level1 = ({ id }) => {
  return (
    <>
      <h1>Level1 component</h1>
      <p>ID is {id}</p>
      <Level2 id={id} />
    </>
  )
}