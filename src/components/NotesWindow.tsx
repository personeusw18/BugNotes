import { NoteContainer, Note } from './NoteContainer'
import React, { useState } from "react"

interface NotesWindowPropTypes {
  notes: Note[];
}

export function NotesWindow (props: NotesWindowPropTypes) {

  return (
    <div>
      { props.notes.map(note => (
        <NoteContainer note={note}/>
      ))}

    </div>
  )
}