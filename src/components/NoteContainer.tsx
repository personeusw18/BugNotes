import { ChangeEvent, useState } from "react";

export interface Note{
  message: string;
  name: string;
  date?: Date;
}

interface NotePropTypes {
  note: Note;
  editable?: boolean;
}

export function NoteContainer (props: NotePropTypes) {

  const [noteMessage, setNoteMessage] = useState(props.note.message);
  const [noteName, setNoteName] = useState(props.note.name);


  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    setNoteMessage(e.target.value)
  }

  const handleMessageNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNoteName(e.target.value)
  }

  return (
    <div className="bg-yellow-50 text-xl min-h-[100px] font-cursive m-6 mb-0 p-10 pt-4 pb-4
        flex flex-col shadow-md justify-between" 
    >
      <textarea onChange={handleMessageChange} className="bg-yellow-50 text-zinc-900 placeholder-zinc-900 h-96 resize w-full max-w-full min-w-[200px]" value={noteMessage}/>
      <div id="name-div">
        <span>- </span>
        <input onChange={handleMessageNote} className="bg-yellow-50 text-zinc-900 placeholder-zinc-900 " type="text" value={noteName}/>
      </div>
    </div>
  )
}