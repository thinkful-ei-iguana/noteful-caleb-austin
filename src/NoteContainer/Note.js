import React from 'react'

const Note = (props) => {
    return (
        <li key={props.noteID}>{props.noteName}<br/>{props.noteDate}<br/>{props.noteContent}</li>
    )
}

export default Note