import { useState } from 'react'
import { NotesWindow, Footer} from './components'
import { NavBar, NavTitle, NavItem } from './components/NavBar' 
import { Link, Route } from 'wouter'
import "./global.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <NavBar>
        <div id="nav-bar" className="flex justify-between">
          <NavTitle to="/">Bug Notes</NavTitle>
          <div id="nav-links" className="flex gap-8">
            <NavItem to="/profile">Profile</NavItem>
            <NavItem to="/notes">Notes</NavItem>
          </div>
        </div>
      </NavBar>

      <Route path="/">Home</Route>
      <Route path="/profile">Profile</Route>
      <Route path="/notes">Notes</Route>
      
      <Footer />
    </div>
  )
}

export default App
