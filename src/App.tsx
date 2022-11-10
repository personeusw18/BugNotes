import { useState } from 'react'
import { NavBar, NotesWindow, Footer} from './components'
import { Link, Route } from 'wouter'
import "./global.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <NotesWindow />
      <Footer />
    </div>
  )
}

export default App
