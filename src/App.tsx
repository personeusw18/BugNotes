import { useState } from 'react'
import { NotesWindow, Footer} from './components'
import { NavBar, NavTitle, NavItem } from './components/NavBar' 
import { Link, Route } from 'wouter'
import "./global.css"
import { ProfileWindow } from './components/ProfileWindow'
import { GiQuill } from "react-icons/gi"
import { BiBug } from "react-icons/bi"
import { Note } from "./components/NoteContainer"


function App() {
  const [notesArray, setNotesArray] = useState<Note[]>([])

  const handleWriteClick: React.MouseEventHandler<SVGElement> = (e) => {
    setNotesArray([...notesArray, {name: "", message: ""}])
  }

  return (
    <>
      <NavBar>
        <ul id="icon-title" className="flex flex-row gap-8">
          <BiBug className="text-gray-300 mt-2 lg:mt-3 scale-[2] lg:scale-[2.5] rotate-12 hover:text-gray-400 hover:cursor-pointer"/>
          <NavTitle to="/">Bug Notes</NavTitle>
        </ul>
        <ul id="nav-links" className="flex gap-6 lg:gap-12 max-w-screen-xl">
          <NavItem to="/"></NavItem>
          <GiQuill onClick={handleWriteClick} className="mt-2 text-gray-300 scale-[2] lg:scale-[2.5] rotate-12 hover:text-gray-400 hover:cursor-pointer"/>
          <NavItem to="/profile">Profile</NavItem>
          <NavItem to="/notes">Notes</NavItem>
        </ul>
      </NavBar>

      <div id="page-content" className="m-0 p-0 box-border h-full flex-1">
        <Route path="/">
          <div>
            <NotesWindow notes={notesArray}/>
          </div>
        </Route>
        <Route path="/profile"><ProfileWindow/></Route>
        <Route path="/notes"><NotesWindow notes={notesArray} /></Route>
      </div>

      <Footer />
    </>
  )
}

export default App
