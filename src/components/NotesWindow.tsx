import { NoteContainer, Note } from './NoteContainer'
import React, { useState } from "react"



export function NotesWindow () {

  const [notesArray, setNotesArray] = useState<Note[]>([
    {name:"wolf", message:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"},
    {name:"frank", message:"nerd"},
    {name:"aaron", message:"gay"},
    {name:"nick", message:"sexy"}
])

  // const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
  //   this.setNotesArray({});
  // }

  return (
    <div className="flex flex-col ml-20 mr-20 p-0 align-middle">
      { notesArray.map(note => (
        <NoteContainer note={note}/>
      ))}

    </div>
  )
}