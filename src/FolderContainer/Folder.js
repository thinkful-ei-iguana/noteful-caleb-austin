import React from 'react'

const Folder = (props) => {
    return (
        <li key={props.folderID}>{props.folderName}</li>
    )
}

export default Folder