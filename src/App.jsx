import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Pages/Landing'
import All from './Pages/All.jsx'

function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className='bg-red-500'>
       {page === "landing" && <Landing goToNext={() => setPage("all")} />}
       {page === "all" && <All />}
    </div>
  )
}

export default App
