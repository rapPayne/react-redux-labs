import './App.css'
import { MaintainUser } from './MaintainUser'

function App() {
  const person = { first: "Chrissy", last: "Fresh", email: "cf@aol.com" }
  return (
    <main>
      <MaintainUser person={person} />
    </main>
  )
}

export default App
