import { Level4 } from './Level4';

export const Level3 = ({ id }) => {
  return (
    <>
      <h1>Level3 component</h1>
      <p>ID is {id}</p>
      <Level4 id={id} />
    </>
  )
}