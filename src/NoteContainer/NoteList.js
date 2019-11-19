import React from 'react'
import Note from './Note'

const NoteList = (props) => {

  const currentNotes = props.notes.map(currentNote => {
    return (
      <Note 
         noteName = {currentNote.name}
         noteID = {currentNote.id}
         noteDate = {currentNote.modified}
         noteContent = {currentNote.content}
      />
    )
  })

  return (
    <ul>
      {currentNotes}
    </ul>
  )
}

export default NoteList