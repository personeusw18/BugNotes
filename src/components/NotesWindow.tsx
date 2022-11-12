import { NoteContainer, Note } from './NoteContainer'
import React, { useState } from "react"

interface NotesWindowPropTypes {
  notes: Note[];
}

export function NotesWindow (props: NotesWindowPropTypes) {

  return (
    <div className="flex flex-row p-0 align-middle">
      { props.notes.map(note => (
        <NoteContainer note={note}/>
      ))}

    </div>
  )
}