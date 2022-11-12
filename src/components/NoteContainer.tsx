import { useState } from "react";

export interface Note{
  name: string;
  message: string;
  // date?: Date;
}

interface PropTypes {
  note: Note;
  editable?: boolean;
}

export function NoteContainer (props: PropTypes) {

  const [note, setNote] = useState(props.note);

  const handleMessageChange = () => {

  }


  return (
    <div className="bg-yellow-50 text-xl min-h-[100px] font-cursive m-6 mb-0 p-10 pt-4 pb-4 w-min
        flex flex-col shadow-md justify-between" 
    >
      <textarea onChange={handleMessageChange} className="bg-yellow-50 text-zinc-900 placeholder-zinc-900 h-96 resize max-w-full min-w-[200px]" value={note.message}/>
      <input className="bg-yellow-50 text-zinc-900 placeholder-zinc-900 " type="text" value={"-" + note.name}/>
    </div>
  )
}