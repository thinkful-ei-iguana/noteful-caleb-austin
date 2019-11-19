import React from 'react'
import NoteList from './NoteList'

const NoteContainer = (props) => {
    return (
        <section>
            <NoteList
              notes={props.notes}
            />
        </section>
    )
}

export default NoteContainer