import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import UseEffectUseState from './UseEffectUseState'
import Use from './Use'
import { Suspense } from 'react'
import UseActionState from './UseActionState'
import { TanstackQuery } from './TanstackQuery'
//#region For TanStack Query only
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TanstackCache } from './TanstackCache'
const queryClient = new QueryClient();
//#endregion

function App() {
  document.title = "Bunch o users"
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to={"/useState"}>useState/useEffect</Link>
            <Link to={"/use"}>use/Suspense</Link>
            <Link to={"/useActionState"}>useActionState</Link>
            <Link to={"/tanstackQuery"}>TanStack Query</Link>
            <Link to={"/tanstackCache"}>TanStack Cache</Link>
          </nav>
        </header>
        <main>
          <h1>Fetching users</h1>

          <Routes>
            <Route path="/useState" element={<UseEffectUseState />} />
            <Route path="/use" element={
              <Suspense fallback="Loading ...">
                <Use />
              </Suspense>
            } />
            <Route path="/useActionState" element={<UseActionState />} />
            <Route path="/tanstackQuery" element={<TanstackQuery />} />
            <Route path="/tanstackCache" element={<TanstackCache />} />
            <Route path="/" element={<p>Pick a method above</p>} />
          </Routes>

        </main>
      </QueryClientProvider>
    </>
  )
}

export default App
