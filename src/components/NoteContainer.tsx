import { ChangeEvent, useState } from "react";

export interface Note{
  message: string;
  name: string;
  // date?: Date;
}

interface PropTypes {
  note: Note;
  editable?: boolean;
}

export function NoteContainer (props: PropTypes) {

  const [noteMessage, setNoteMessage] = useState(props.note.message);
  const [noteName, setNoteName] = useState(props.note.name);


  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    setNoteMessage(e.target.value)
  }

  const handleMessageNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNoteName(e.target.value)
  }

  return (
    <div className="bg-yellow-50 text-xl min-h-[100px] font-cursive m-6 mb-0 p-10 pt-4 pb-4 w-min
        flex flex-col shadow-md justify-between" 
    >
      <textarea onChange={handleMessageChange} className="bg-yellow-50 text-zinc-900 placeholder-zinc-900 h-96 resize max-w-full min-w-[200px]" value={noteMessage}/>
      <input onChange={handleMessageNote} className="bg-yellow-50 text-zinc-900 placeholder-zinc-900 " type="text" value={noteName}/>
    </div>
  )
}