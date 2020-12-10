import { Level3 } from './Level3';

export const Level2 = ({ id }) => {
  return (
    <>
      <h1>Level2 component</h1>
      <p>ID is {id}</p>
      <Level3 id={id} />
    </>
  )
}