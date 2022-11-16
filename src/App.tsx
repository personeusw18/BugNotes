import { useState, useEffect } from 'react'
import "./global.css"

import { NotesWindow, Footer} from './components'
import { NavBar, NavTitle, NavItem } from './components/NavBar' 
import { ProfileWindow } from './components/ProfileWindow'
import { Note } from "./components/NoteContainer"
import { Login } from "./components/LoginWindow"
import { SingUp } from "./components/SignUpWindow"

import { Link, Route } from 'wouter'

import { GiQuill } from "react-icons/gi"
import { BiBug } from "react-icons/bi"

import { db } from './config/config'
import { collection, getDocs } from '@firebase/firestore'

function App() {

  const [notesArray, setNotesArray] = useState<Note[]>([])

  const handleWriteClick: React.MouseEventHandler<SVGElement> = (e) => {
    setNotesArray([...notesArray, {name: "", message: ""}])
  }

  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    }

    getUsers()
  
  }, [])

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
          <NavItem to="/notes">Notes</NavItem>
          <NavItem to="/profile">Profile</NavItem>
          
        </ul>
      </NavBar>

      <div id="page-content" className="m-0 p-0 box-border h-full flex-1">

        <Route path="/">
          <Login/>
        </Route>

        <Route path="/signup">
          <SingUp/>
        </Route>      

        <Route path="/profile">
          <ProfileWindow/>
        </Route>

        <Route path="/notes">
          <NotesWindow notes={notesArray} />
        </Route>


      </div>

      <Footer />
    </>
  )
}

export default App

