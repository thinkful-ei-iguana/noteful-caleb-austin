import React from 'react'
import { Link } from 'react-router-dom'

const Folder = (props) => {
    //console.log("folderID", props.folderID, "ActiveFolder", props.activeFolder)
    const ActiveFolderDisplay = (props.folderID === props.activeFolder) ?
      'selected-folder' :
      'unselected-folder';
    //console.log(ActiveFolderDisplay)
    return (
      <Link to={`/folder/${props.folderID}`}>
        <li 
          key={props.folderID}
          className={ActiveFolderDisplay}>
            {props.folderName}
        </li>
      </Link>
    )
}

export default Folder