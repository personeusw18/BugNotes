import { useState } from 'react'
import "./global.css"

import { NotesWindow, Footer} from './components'
import { NavBar, NavTitle, NavItem } from './components/NavBar' 
import { ProfileWindow } from './components/ProfileWindow'
import { Note } from "./components/NoteContainer"

import { Link, Route } from 'wouter'

import { GiQuill } from "react-icons/gi"
import { BiBug } from "react-icons/bi"

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { firebaseConfig } from './config/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

// firebase.initializeApp({ firebaseConfig })

// const auth = firebase.auth()
// const firestore = firebase.firestore()

function App() {
  const [notesArray, setNotesArray] = useState<Note[]>([])
  // const [user] = useAuthState(auth);

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
          <NotesWindow notes={notesArray}/>
        </Route>
        <Route path="/profile"><ProfileWindow/></Route>
        <Route path="/notes"><NotesWindow notes={notesArray} /></Route>
      </div>

      <Footer />
    </>
  )
}

export default App
// function initializeApp(firebaseConfig: { firebase: { apiKey: string | undefined; authDomain: string | undefined; databaseURL: string | undefined; projectId: string | undefined; storageBucket: string | undefined; messagingSenderId: string | undefined; appId: string | undefined; measurementId: string | undefined } }) {
//   throw new Error('Function not implemented.')
// }

