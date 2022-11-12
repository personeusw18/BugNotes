import { ChangeEvent, useState } from "react";
import Draggable, {DraggableCore} from 'react-draggable';

export interface Note{
  message: string;
  name: string;
  date?: Date;
}

interface NotePropTypes {
  note: Note;
  editable?: boolean;
  active?: boolean;
}

export function NoteContainer (props: NotePropTypes) {

  const [noteMessage, setNoteMessage] = useState(props.note.message);
  const [noteName, setNoteName] = useState(props.note.name);
  const [noteMessageHeight, setNoteMessageHeight] = useState(0);


  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    setNoteMessage(e.target.value)
    setNoteMessageHeight(e.target.scrollHeight)
  }

  const handleMessageNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNoteName(e.target.value)
  }

  return (
    <Draggable bounds={"parent"}>
      <div className="bg-yellow-50 text-xl w-[300px] h-fit font-cursive p-4
          flex flex-col shadow-lg justify-between border-zinc-400 border-opacity-25 m-3 border-2 absolute" 
      >
        <div id="pin" className="w-full h-full bg-black">
          <div className="absolute left-[calc(50%-13px)] -top-8 w-6 h-6 rounded-full bg-gradient-to-tr from-rose-900 to-rose-600 outline-1 outline-zinc-800"/>
          <div className="absolute left-[calc(50%-4px)] top-[12px] w-1.5 h-1.5 rounded-full opacity-25 bg-zinc-700 outline-zinc-800"/>
          <div className="absolute left-[calc(50%-2px)] w-0.5 h-6 -top-2 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-b-full"/>

        </div>

        <textarea 
          onChange={handleMessageChange} 
          spellCheck={false}
          maxLength={500}
          style={{height: noteMessageHeight}}
          className="bg-yellow-50 box-border text-zinc-900 placeholder-zinc-900 focus:outline-none overflow-auto
            focus:border-zinc-400 focus:outline-dashed focus:outline-2 focus:outline-zinc-300 min-h-[2rem] resize-none" 
          value={noteMessage}/>

        <div id="name-div" className="flex w-fit pt-2">
          <span>- </span>
          <input
            spellCheck={false}
            onChange={handleMessageNote} 
            className="bg-yellow-50 text-zinc-900 placeholder-zinc-900 focus:outline-none 
            focus:outline-dashed focus:outline-2 focus:outline-zinc-300 " 
            type="text" 
            value={noteName}/>
        </div>
      </div>
    </Draggable>
  )
}