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
        <NavTitle to="/">Bug Notes</NavTitle>
        <ul id="nav-links" className="flex gap-6 lg:gap-12 max-w-screen-xl">
          <NavItem to="/profile">Profile</NavItem>
          <NavItem to="/notes">Notes</NavItem>
        </ul>
      </NavBar>

      <Route path="/"><NotesWindow/></Route>
      {/* <Route path="/profile"><ProfileWindow/></Route> */}
      <Route path="/notes"><NotesWindow/></Route>
      
      <Footer />
    </div>
  )
}

export default App
