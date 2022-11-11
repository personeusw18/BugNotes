import { useState } from 'react'
import { NavBar, NotesWindow, Footer} from './components'
import { Link, Route } from 'wouter'
import "./global.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <NavBar />
      <Route path="/" ></Route>
      <Route path="/about" ></Route>
      <Route path="/:name" ></Route>
      <Route path="/:name/:partner" ></Route>
      {/* <NotesWindow /> */}
      <Footer />
    </div>
  )
}

export default App
