import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import UseEffectUseState from './UseEffectUseState'
import Use from './Use'

function App() {

  return (
    <>
      <header>
        <nav>
          <Link to="/old">Old</Link>
          <Link to="/new">New</Link>
        </nav>
      </header>
      <main>
        <h1>Fetching users</h1>
        <Routes>
          <Route path="/old" element={<UseEffectUseState />} />
          <Route path="/new" element={<Use />} />
        </Routes>
      </main>
    </>
  )
}

export default App
